import React, { useState } from 'react'
import styled from 'styled-components'
import ChipsBar from '../ChipsBar/ChipsBar'
import Videos from '../Videos/Videos'
import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  MOBILE_VIEW_MAX_WIDTH,
} from '../utils/utils'
import SidebarToShow from '../Sidebar/SidebarToShow'

const Main = () => {
  const [selectedChipIndex, setSelectedChipIndex] = useState(0)
  const [landingPageVideos, setLandingPageVideos] = useState([])
  const [nextPageToken, setNextPageToken] = useState(null)

  return (
    <StyledMain>
      <SidebarToShow />

      <ChipsBar
        {...{
          selectedChipIndex,
          setSelectedChipIndex,
          setLandingPageVideos,
          setNextPageToken,
        }}
      />
      <Videos
        {...{
          selectedChipIndex,
          setSelectedChipIndex,
          landingPageVideos,
          setLandingPageVideos,
          nextPageToken,
          setNextPageToken,
        }}
      />
    </StyledMain>
  )
}

export default Main

const StyledMain = styled.div`
  @media screen and (max-width: ${MOBILE_VIEW_MAX_WIDTH}px) {
    padding-top: ${MOBILE_VIEW_HEADER_HEIGHT}px;
  }
  padding-top: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  /* min-height: 100vh; */
`
