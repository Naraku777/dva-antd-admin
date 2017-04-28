import { Layout, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import styles from './Layout.less'

const MainHeader = ({ location, isSiderCollapsed, toggleSider }) => {
  return (
    <Header className={styles.header}>
      <Icon
        className={styles.trigger}
        type={isSiderCollapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggleSider}
      />
    </Header>
  )
}

export default MainHeader
