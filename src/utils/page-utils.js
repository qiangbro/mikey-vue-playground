export default {

  parsePageParam(p) {
    let pageNum = p && Number.parseInt(p.split(',')[0]) || 1;
    let pageSize = p && p.split(',')[1] && Number.parseInt(p.split(',')[1]) || this.DEFAULT_PAGE_SIZE;
    return {pageNum, pageSize};
  },


  generatePageParam({pageNum=1, pageSize}) {
    let p = (pageSize && pageSize!==this.DEFAULT_PAGE_SIZE) ? `${pageNum},${pageSize}` : (`${(pageNum!==1) ? pageNum : ''}` || undefined);
    return p;
  },



}