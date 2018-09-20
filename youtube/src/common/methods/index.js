const thumbnailToAction = (e) => {
  e.target.parentElement.parentElement.getElementsByClassName('thumbnail-hover')[0].style.animation ='togif 3s linear'
}
const thumbnailToStop = (e) => {
  e.target.parentElement.parentElement.getElementsByClassName('thumbnail-hover')[0].style.animation =''
}
export const toGifBindEvent = () => {
  let thumbnails = document.getElementsByClassName('thumbnail')
  for (let i = 0; i < thumbnails.length; i++ ) {
    thumbnails[i].onmouseover = thumbnailToAction
    thumbnails[i].onmouseout = thumbnailToStop
  }
}
