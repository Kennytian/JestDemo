export function newsDetail(state = {}, { type, data }) {
  switch (type) {
    case 'NEWS_DETAIL':
      return { ...state, ...data };
    default:
      return state;
  }
}

