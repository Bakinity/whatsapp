import React, { useState } from "react";
import "./style.css";
import { profile } from "../../Assets/img";
import { SideInChatSearch } from "../../Components";
import { MdMoreVert } from "react-icons/md";

import { Button, Col, Image, Row, Layout, Typography, Popover } from "antd";
const { Header } = Layout;

const _menu_ = [
  "Данные контакта",
  "Выбрать сообщения",
  "Закрыть чат",
  "Без звука",
  "Исчезающие сообщения",
  "Очистить чат",
  "Удалить чат",
  "Пожаловаться",
  "Заблокировать",
];

const Index = ({ photo }) => {
  const [src, setSrc] = useState(photo);
  const onError = () => setSrc(profile);

  return (
    <Header
      style={{
        background: "rgb(240, 242, 245)",
        paddingInline: 0,
        lineHeight: 0,
      }}
    >
      <Row width='100%' align='middle' className='currentUserInfoRow'>
        <Col style={{ width: 60 }}>
          <Image
            width={50}
            height={50}
            preview={false}
            style={{ borderRadius: "50%" }}
            src={src}
            onError={onError}
          />
        </Col>
        <Col style={{ width: "calc(100% - 140px)" }}>
          <Typography.Title level={5}>Aliyev Ali</Typography.Title>
          <Typography.Text>Online</Typography.Text>
        </Col>
        <Col style={{ width: 80 }}>
          <SideInChatSearch />
          <Popover
            placement='bottomRight'
            trigger='click'
            content={_menu_.map((val, ind) => (
              <Button
                type='text'
                style={{ display: "block", width: "100%", textAlign: "left" }}
                key={ind}
              >
                {val}
              </Button>
            ))}
          >
            <Button
              type='text'
              icon={<MdMoreVert className='chatListIcon' />}
              shape={"circle"}
            />
          </Popover>
        </Col>
      </Row>
    </Header>
  );
};

export default Index;
