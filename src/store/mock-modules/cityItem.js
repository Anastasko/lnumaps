export default {
  namespaced: true,
  state: {
    data: [
      {
        'id': 191,
        'name': 'Факультет прикладної математики та інформатики',
        'placeId': 'ChIJyWCNcXHdOkcRhLJMALiN54I',
        'longitude': 24.021929,
        'latitude': 49.840764,
        'address': 'вулиця Листопадового Чину, 5.',
        'kind': {
          'id': 179
        }
      }, {
        'id': 192,
        'name': 'Філологічний факультет',
        'placeId': 'ChIJowgRnHHdOkcRv6_8QDtQln0',
        'longitude': 24.023146,
        'latitude': 49.840296,
        'address': 'вулиця Тадеуша Костюшка, 5.',
        'kind': {
          'id': 179
        }
      }, {
        'id': 194,
        'name': 'Факультет культури і мистецтв',
        'placeId': 'ChIJf_PoCWzdOkcRLXq7TkvkocM',
        'longitude': 24.034738,
        'latitude': 49.839872,
        'address': 'вулиця Валова, 18.',
        'kind': {
          'id': 179
        }
      }, {
        'id': 197,
        'name': 'Географічний факультет',
        'placeId': 'ChIJYZcgGXDdOkcRQIwE6BSb_0E',
        'longitude': 24.02336,
        'latitude': 49.837275,
        'address': 'вулиця Петра Дорошенка, 41.',
        'kind': {
          'id': 179
        }
      }
    ]
  },
  actions: {
    async fetch (state) {
      return Promise.resolve(state.data)
    }
  }
}
