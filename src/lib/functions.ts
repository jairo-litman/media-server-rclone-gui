import { useQuery } from "@sveltestack/svelte-query"

/**
 * If the string ends with pattern " (1234)": Returns string without it or only the 4 digits inside.  
 * If the string does not end with pattern then it is unmodified.
 *   
 * '1234' can be any 4 digit number
 * @param input String to modify
 * @returns String without year, string unmodified or just the year
 */
export const yearFromEnd = (input: string) => {
  const splitInput = input.split(/( \(\d{4}\))$/).filter(Boolean)

  if (splitInput.length !== 2)
    return {noYear: input, yearOnly: null}
  
  const noYear = splitInput[0]
  const yearOnly = splitInput[1].replace(/[^\d]+/g, '')

  return {noYear, yearOnly}
}

export const rcloneListQuery = async (queryType: 'Filmes' | 'Series' | 'Jogos') => {
  const response = await fetch(`http://localhost:5572/operations/list`, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      'fs': 'piratinha-crypt:',
      'remote': queryType,
      '_config': {
        "fast-list": true,
        "drive-pacer-min-sleep": "10ms",
        "checkers": 128,
        "transfers": 128
      }
    })
  })
  if (!response.ok) {
    throw new Error('Network response was not Ok')
  }
  return response.json()
}