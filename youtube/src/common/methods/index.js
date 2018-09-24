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


const topBtnBgToDeep = (e) => {
  let activeElem = e.target
  activeElem.parentElement.parentElement.classList.add('deep')
  activeElem.onmouseup = () => {
    activeElem.parentElement.parentElement.classList.remove('deep')
  }
}

export const topBtnBindMouseDownEvent = () => {
  let Btns = document.getElementsByClassName('change-bg')
  for (let i = 0; i < Btns.length; i++ ) {
    Btns[i].onmousedown = topBtnBgToDeep
  }
}
