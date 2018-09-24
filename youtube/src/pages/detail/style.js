import styled from 'styled-components'

export const DetailWrapper = styled.div`
  margin: 0 75px;
  display: flex;
  flex-direction: row;

  #primary {
    padding-top: 24px;
    padding-right: 24px;
    margin-left: 24px;
  }
    
  
  
  
  #secondary {
    padding-top: 24px;
    padding-right: 24px;
    width: 402px
  }
`
export const VideoPrimaryInfoRenderer = styled.div`
  padding: 20px 0 8px 0;
  #container>h1 {
    display: block;
    max-height: 4.8rem;
    overflow: hidden;
    font-size: 18px;
    font-weight: 400;
    line-height: 2.4rem;
  }
  #container>#info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
    #info-text {
      display: block;
      max-height: 2rem;
      overflow: hidden;
      font-size: 16px;
      font-weight: 400;
      line-height: 2rem;
    }
    #flex {
      flex: 1;
    }
    #menu-container {
      position: relative;
    }
      #menu {
        position: relative;
        top: 4px;
      }
`

export const MenuRenderer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
    #top-level-buttons {
      display: flex;
      flex-direction: row;
    }
`
export const ToggleButtonRenderer = styled.div`
  margin-left: 8px;
  padding-right: 8px;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: .007px;
  text-transform: uppercase;
  a {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
export const ButtonRenderer = styled.div`
  margin-left: 8px;
  padding-right: 8px;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: .007px;
  text-transform: uppercase;
    a {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
`

export const VideoIconButton = styled.div`
  margin: 0;
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  transition: background .3s;
  &.deep {
    background: #ececec;
    transition: background .3s;
  }
    #button {
    text-align: center;
    vertical-align: middle;
    color: #ccc;
    outline: none;
    margin: 0;
    border: none;
    padding: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: transparent;
    color: gray;
    }
`
export const ButtonText = styled.div`
  font-size: 14px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
