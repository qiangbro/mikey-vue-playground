export default {

  /**
   * 解析请求参中的p
   *
   * @param p
   * @param default_page_size
   * @returns {{pageSize: (*|string|number), pageNum: (*|number)}}
   */
  parse_page_param({p, default_page_size}) {
    let pageNum = p && Number.parseInt(p.split(',')[0]) || 1;
    let pageSize = p && p.split(',')[1] && Number.parseInt(p.split(',')[1]) || default_page_size;
    return {pageNum, pageSize};
  },

  /**
   * 根据pageNum、pageSize生成请求参p
   * @param pageNum
   * @param pageSize
   * @param default_page_size
   * @returns {*}
   */
  generate_page_param({pageNum=1, pageSize, default_page_size}) {
    let p = (pageSize && pageSize!==default_page_size) ? `${pageNum},${pageSize}` : (`${(pageNum!==1) ? pageNum : ''}` || undefined);
    return p;
  },

}