/* eslint-disable no-undef,no-unused-vars */

import { newsDetail } from '../news';

describe('News reducer', () => {
  it('newsDetail has a default store', () => {
    const received = newsDetail(undefined, { type: 'unexpected' });
    const expected = {};
    expect(received).toEqual(expected);
  });

  it("newsDetail can handle 'NEWS_DETAIL'", () => {
    const received = newsDetail({}, {
      type: 'NEWS_DETAIL',
      data: {
        title: '彩票新闻单元测试',
        viewCounts: 40,
      },
    });
    const expected = {
      title: '彩票新闻单元测试',
      viewCounts: 40,
    };
    expect(received).toHaveProperty('title');
    expect(received).toEqual(expected);
    expect(received).toMatchObject(expected);
  });
});
