import { Layout, Icon, Menu } from 'antd'
import { Link } from 'dva/router'

import styles from './Layout.less'
import { MENU as menu } from '../../constants'

const { Sider } = Layout

const MainSider = ({ isSiderCollapsed, location }) => {

  const getDefaultSelectedKeys = () => {
    const pathname = location.pathname;
    if (pathname === '/') {
      return '/dashboard'
    }
    return pathname
  }

  return (
    <Sider
      className={[styles.sider, 'main-sider']}
      collapsible
      trigger={null}
      collapsed={isSiderCollapsed}
    >
      <div className={styles.logo} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[getDefaultSelectedKeys()]}
      >
        {menu.map(item => {
          return (
            <Menu.Item key={item.key}>
              <Link to={item.key}>
                <Icon type={item.icon} />
                <span className="nav-text">{item.title}</span>
              </Link>
            </Menu.Item>
          )
        })}

      </Menu>
    </Sider>
  )
}

// 封装 Sider 设置
MainSider.__ANT_LAYOUT_SIDER = true

export default MainSider
