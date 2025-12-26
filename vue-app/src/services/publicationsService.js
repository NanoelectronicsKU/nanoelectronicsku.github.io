const SPREADSHEET_ID = '1_Tls2yE5RBSoIxoE0sO0d8g2xwK6DEFudSoIeg39Mag'
const API_KEY = 'AIzaSyBHECvEQrp53QkADu5s1oS_xom2ImcEtNk'
const SHEET_NAME = 'Publications'

export async function fetchPublications() {
  try {
    const range = `${SHEET_NAME}!A:M` // A to M covers all needed columns
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    if (!data.values) {
      throw new Error('No data found in spreadsheet')
    }

    // Skip first 2 rows (row 1 is empty, row 2 is headers)
    const rows = data.values.slice(2)

    // Group publications by year
    const publicationsByYear = {}

    rows.forEach(row => {
      // Column mapping based on your sheet:
      // A: 번호, B: 년도, C: Title, D: First Author, E: Co-first Authors,
      // F: Authors, G: Corresponding Authors, H: Journal, I: DOI,
      // J: 시작페이지, K: 끝페이지, L: Volume(issue)
      const number = row[0] || ''
      const year = row[1] || ''
      const title = row[2] || ''
      const firstAuthor = row[3] || ''
      const coFirstAuthors = row[4] || ''
      const authors = row[5] || ''
      const correspondingAuthors = row[6] || ''
      const journal = row[7] || ''
      const doi = row[8] || ''
      const startPage = row[9] || ''
      const endPage = row[10] || ''
      const volumeIssue = row[11] || ''

      // Skip empty rows
      if (!year || !title) return

      if (!publicationsByYear[year]) {
        publicationsByYear[year] = []
      }

      let page = startPage
      if (endPage != '') {
	page += "-"
	page += endPage
      }
      if (page != '')
      {
	page = ", " + page
      }
      // Build complete author list with markers
      let authorList = ''

      // Helper function to add dagger marker to names
      const addDaggerToNames = (nameString) => {
        if (!nameString) return ''
        // Split by comma, add † to each name, rejoin
        return nameString.split(',').map(name => name.trim() + '†').join(', ')
      }

      // Helper function to add asterisk marker to names
      const addAsteriskToNames = (nameString) => {
        if (!nameString) return ''
        // Split by comma, add * to each name, rejoin
        return nameString.split(',').map(name => name.trim() + '*').join(', ')
      }

      if (firstAuthor) {
        // If there are co-first authors, add † to first author and co-first authors
        if (coFirstAuthors) {
          authorList = addDaggerToNames(firstAuthor)
          authorList += ', ' + addDaggerToNames(coFirstAuthors)
        } else {
          // If no co-first authors, just use first author without marker
          authorList = firstAuthor
        }

        // Add regular authors
        if (authors) {
          authorList += ', ' + authors
        }

        // Add corresponding authors with * marker
        if (correspondingAuthors) {
          authorList += ', ' + addAsteriskToNames(correspondingAuthors)
        }
      } else if (authors) {
        authorList = authors
        // Still add * to corresponding authors even if no first author
        if (correspondingAuthors) {
          authorList += ', ' + addAsteriskToNames(correspondingAuthors)
        }
      }

      // Parse volume and issue from Volume(issue) format like "17(41)"
      let volume = ''
      let issue = ''
      if (volumeIssue) {
        const match = volumeIssue.match(/^(\d+)\((\d+)\)/)
        if (match) {
          volume = match[1]
          issue = match[2]
        } else {
          volume = volumeIssue
        }
      }
      if (issue != '')
      {
	issue = '(' + issue + ')'
      }

      publicationsByYear[year].push({
        number: parseInt(number) || 0,
        title: title,
        authors: authorList,
        journal: journal,
        volume: volume,
        issue: issue,
	page: page,
        year: year,
        url: doi || ''
      })
    })

    // Convert to array format and sort by year (descending)
    const publications = Object.keys(publicationsByYear)
      .sort((a, b) => parseInt(b) - parseInt(a))
      .map(year => ({
        year,
        papers: publicationsByYear[year].sort((a, b) => b.number - a.number)
      }))

    return { publications }
  } catch (error) {
    console.error('Error fetching publications:', error)
    throw error
  }
}
