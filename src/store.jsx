import {atom} from 'jotai'

export const isSidebarDrawerOpenAtom = atom(false)

// default userSetting to show FullWidthSidebar
export const userSettingToShowFullSidebarAtom = atom(true)

export const selectedChipIndexAtom = atom(0)