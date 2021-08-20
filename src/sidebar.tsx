import * as React from 'react';
import { CommandBarButton, IContextualMenuProps, IIconProps, Stack, IStackStyles } from 'office-ui-fabric-react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}
const menuProps: IContextualMenuProps = {
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
};
const addIcon: IIconProps = { iconName: 'Add' };
const mailIcon: IIconProps = { iconName: 'Mail' };
const stackStyles: Partial<IStackStyles> = { root: { height: 44 } };
const Sidebar: React.FunctionComponent<IButtonExampleProps> = props => {
const { disabled, checked } = props;
  return (
    <Stack horizontal styles={stackStyles}>
      <CommandBarButton
        iconProps={addIcon}
        text="New item"
        // Set split=true to render a SplitButton instead of a regular button with a menu
        // split={true}
        menuProps={menuProps}
        disabled={disabled}
        checked={checked}
      />
      <FontIcon iconName="CompassNW">esryserywerterter</FontIcon>
      <CommandBarButton iconProps={mailIcon} text="Send mail" disabled={disabled} checked={checked} />
    </Stack>
  );
};
export default Sidebar;

