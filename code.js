export const run = ({ state, element, events, iteration }) => {
  let baseURL = `https://source.unsplash.com`///featured/?{KEYWORD},{KEYWORD}`
  let width = state.imgWidth || 400
  let height = state.imgHeight || 300
  if (state.imgID) {
    state.imgURL = `${baseURL}/${state.imgID}/${width}x${height}`
  } else if (state.search) {
    state.imgURL = `${baseURL}/${width}x${height}/?${state.search}`
  } else {
    state.imgURL = `${baseURL}/random/${width}x${height}`
  }
}
