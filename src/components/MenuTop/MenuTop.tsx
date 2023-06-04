import { Menu, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsGlobeEuropeAfrica, BsImageAlt } from 'react-icons/bs';

const items: MenuProps['items'] = [
  {
    label: <Link to={'/map-generator'}>Map generator</Link>,
    key: 'map-generator',
    icon: <BsGlobeEuropeAfrica />,
  },
  {
    label: <Link to={'/svg-generator'}>SVG generator</Link>,
    key: 'svg-generator',
    icon: <BsImageAlt />,
  },
];

const MenuTop = () => {
  const [current, setCurrent] = useState('map-generator');

  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key);

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" theme="dark" items={items} />
  );
};

export default MenuTop;
