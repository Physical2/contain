//获取今日新闻列表
export const getNewsList = async(type) => {
  const url = `http://news-at.zhihu.com/api/3/stories/latest`
  try{
    const response = await (await fetch(url)).json()
    return response
  } catch (error) {
    console.log('Fetch Error:', error)
  }
}

//往日
export const getNewsBefore = async (date)=>{
  const url = 'https://news-at.zhihu.com/api/3/news/before/' + date
  try{
    const response = await(await fetch(url)).json()
    return response
  } catch (error){
    // console.log('Fetch Error:',error)
  }
}

// 具体新闻内容
export const getDetails = async (id)=>{
  const url = 'https://news-at.zhihu.com/api/3/story/' + id
  try{
    const response = await(await fetch(url)).json()
    return response
  } catch (error){
    // console.log('Fetch Error:',error)
  }
}

// 新闻额外信息
export const getExtra = async (id)=>{
  const url = 'https://news-at.zhihu.com/api/3/story-extra/' + id
  try{
    const response = await(await fetch(url)).json()
    return response
  } catch (error){
    // console.log('Fetch Error:',error)
  }
}

// 新闻对应长评论
export const getLong = async (id)=>{
  const url = 'https://news-at.zhihu.com/api/4/story/' + id + '/long-comments'
  try{
    const response = await(await fetch(url)).json()
    return response
  } catch (error){
    // console.log('Fetch Error:',error)
  }
}

// 新闻对应短评论
export const getShort = async (id)=>{
  const url = 'https://news-at.zhihu.com/api/4/story/' + id + '/short-comments'
  try{
    const response = await(await fetch(url)).json()
    return response
  } catch (error){
    // console.log('Fetch Error:',error)
  }
}


















  // getData = () => {
  //   let key = ""
  //   const url =  http://news-at.zhihu.com/api/3/stories/latest

  //   fetch(url,{
  //       method: 'GET'
  //   })
  //   .then(res => res.json())
  //   .then((res) => {
  //       console.log(res)
  //       Alert.alert('成功','请求成功')
  //   }).catch((err) => {
  //       Alert.alert('报错',JSON.stringify(err))    //转成字符串
  //   })
  // }

 



