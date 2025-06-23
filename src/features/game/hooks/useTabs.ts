import { useState, useMemo } from "react";
import type { ReactNode } from "react";

export type TabConfig = {
	id: number;
	key: string;
	label: string;
	content: ReactNode;
};

type UseTabsProps = {
	tabs: TabConfig[];
	initialTabId?: number;
};

export function useTabs({ tabs, initialTabId = 0 }: UseTabsProps) {
	const [activeTabId, setActiveTabId] = useState(() => {
		const initialTab = tabs.find((tab) => tab.id === initialTabId);
		return initialTab ? initialTab.id : tabs[0]?.id;
	});

	const activeTab = useMemo(() => {
		return tabs.find((tab) => tab.id === activeTabId);
	}, [activeTabId, tabs]);

	return {
		activeTab,
		setActiveTab: setActiveTabId,
		TabContent: activeTab?.content || null,
	};
}
