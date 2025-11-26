export type Tab = {
    id: string
    name: string
}

export type TabsBarProps = {
    tabs: Tab[]
    activeTabId: string
    onTabSelect: (id: string) => void
    onTabClose: (id: string) => void
}
