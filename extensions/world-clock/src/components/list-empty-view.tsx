import { ActionPanel, Icon, List } from "@raycast/api";
import React from "react";
import { ActionOpenCommandPreferences } from "./action-open-command-preferences";

export function ListEmptyView(props: { title: string; command: boolean; extension: boolean }) {
  const { title, command, extension } = props;
  return (
    <List.EmptyView
      title={title}
      icon={Icon.Clock}
      actions={
        <ActionPanel>
          <ActionOpenCommandPreferences command={command} extension={extension} />
        </ActionPanel>
      }
    />
  );
}
