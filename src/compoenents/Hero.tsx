import React, { useEffect, useRef, useState } from 'react';
// Library for styled components
import styled from 'styled-components';
// Component
import { TLogForm, TLogPage } from './Styled';
import { Image, Timeline } from 'antd';
import { motion, Transition, useAnimation, Variants } from 'framer-motion';
import Texty from 'rc-texty';
// Icon
import { IoArrowUpOutline, IoClose } from 'react-icons/io5';
import { IoBusOutline, IoCafeOutline, IoRestaurantOutline, IoIceCreamOutline } from 'react-icons/io5';
import { RiHotelLine, RiRestTimeLine } from 'react-icons/ri';
// Style
import 'rc-texty/assets/index.css';

/** [Styled component] Page title */
const StyledPageTitle = styled(motion.span)`
  color: #FFFFFF;
  font-size: 72px;
  font-weight: 700;
  user-select: none;
`;
/** [Styled component] Form */
const StyleForm = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: 22px;
  box-shadow: 0 0 4px 2px rgba(126, 126, 126, 0.3);
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  height: 40px;
  position: relative;
  width: 40px;
`;
/** [Styled component] Form header */
const StyledFormHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
/** [Styled component] Show button */
const StyledShowButton = styled(motion.div)`
  align-items: center;
  color: #0000FF;
  cursor: pointer;
  display: flex;
  font-size: 22px;
  height: 40px;
  justify-content: center;
  line-height: 1;
  user-select: none;
  opacity: 1;
  width: 40px;
`;
/** [Styled component] Form body */
const StyledFormBody = styled(motion.div)`
  flex: 1;
  overflow-y: scroll;
  padding: 2rem 1.5rem 1rem 1.5rem;
  position: relative;
`;
/** [Styled component] Timeline form */
const StyledTimelineForm = styled.div`
  position: relative;
  .ant-timeline-item-label {
    color: #7A7A7A;
    font-size: 14px;
    font-weight: 500;
    padding-right: 4px;
    top: -6px !important;
    // width: calc(50% - 24px) !important;
  }
  .ant-timeline-item-head,
  .ant-timeline-item-tail {
    // left: 50% !important;
  }
  .ant-timeline-item-content {
    left: calc(50% - 4px) !important;
    padding-left: 6px;
    // top: -6px !important;
  }
  .ant-timeline-item-head {
    font-size: 20px;
  }
`;

/** [Interface] Device size */
interface DeviceSize {
  height: number;
  width: number;
}

const timelineData = {
  1: [
    { content: '대전터미널', icon: <IoBusOutline />, images: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'], time: '10:00' },
    { content: '전주터미널', icon: <IoBusOutline />, time: '11:00' },
    { content: '짐 보관', time: '11:30' },
    { content: '베테랑 (칼국수)', icon: <IoRestaurantOutline />, time: '11:50' },
    { content: '산책', time: '12:30' },
    { content: '소복 (아이스크림)', icon: <IoIceCreamOutline />, time: '12:50' },
    { content: '산책', time: '13:20' },
    { content: '호텔 체크인', icon: <RiHotelLine />, time: '14:45' },
    { content: '오목대', time: '15:10' },
    { content: '마닐마닐 (초코릿카페)', icon: <IoCafeOutline />, time: '17:00' },
    { content: '마약 육전 (포장)', icon: <IoRestaurantOutline />, time: '18:45' },
    { content: '휴식', icon: <RiRestTimeLine />, time: '19:00' },
  ],
  2: [
    { content: '조식 (호텔)', icon: <IoRestaurantOutline />, time: '08:20' },
    { content: '휴식', icon: <RiRestTimeLine />, time: '09:10' },
    { content: '하녹당 (호텔 카페)', icon: <IoCafeOutline />, time: '12:50' },
    { content: '한국도로공사 전주수목원', time: '14:30' },
    { content: '택시', time: '17:00' },
    { content: '한옥마을', time: '17:20' },
    { content: '저녁 (닭갈비)', icon: <IoRestaurantOutline />, time: '17:35' },
    { content: '산책', time: '18:20' },
    { content: '마시랑게 (전통주)', icons: <IoRestaurantOutline />, time: '17:15' },
    { content: '산책', time: '21:10' },
    { content: '휴식', icon: <RiRestTimeLine />, time: '21:45' },
  ],
  3: [
    { content: '기상', time: '10:00' },
    { content: '체크아웃', time: '11:30' },
    { content: '길거리아 (바게트 버거)', icon: <IoRestaurantOutline />, time: '11:50' },
    { content: '소프트캘리 (아이스크림)', icon: <IoRestaurantOutline />, time: '12:50' },
    { content: '경기전', time: '12:30' },
    { content: '한옥마을', time: '14:40' },
    { content: '전주터미널', icon: <IoBusOutline />, time: '16:00' },
    { content: '대전터미널', icon: <IoBusOutline />, time: '17:00' }
  ]
}

const TLogTitle = ({ status, title, pageWidth }: any): JSX.Element => {
  // Set a ref
  const ref = useRef(null);
  // Create a transition for title
  const transition: Transition = { duration: 0.9, type: 'spring' };
  // Create a variants for title
  const variants: Variants = {
    common: { transition, x: pageWidth > 568 ? -100 : 0 },
    selected: { transition, x: (pageWidth / 2 * (-1)) + (ref.current !== null ? ((ref.current as any).offsetWidth / 2) : 0) }
  };

  // Return an element
  return (
    <TLogForm.Title animate={status ? 'selected' : 'common'} ref={ref} variants={variants}>
      <Texty type='bottom' mode='smooth' delay={214}>{title}</Texty>
    </TLogForm.Title>
  );
}

export const Hero = (): JSX.Element => {
  // Set a local state (show)
  const [size, setSize] = useState<DeviceSize>({ height: 0, width: 0 });
  const [show, setShow] = useState<boolean>(false);
  const [icon, setIcon] = useState<JSX.Element>(<IoArrowUpOutline />);
  // Create an event handler (onShow)
  const onShow = (): void => {
    setShow(!show);
  }

  // Set an animation
  const animation: any = {
    btnShow: useAnimation(),
    form: useAnimation(),
    formContent: useAnimation()
  };

  // Set a resizing event
  useEffect(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
    window.addEventListener('resize', () => setSize({ height: window.innerHeight, width: window.innerWidth }));
  }, []);
  // Set a show event
  useEffect(() => {
    if (show) {
      animation.form.start({ marginBottom: '0px', transition: { duration: 0.36, ease: 'easeOut' } }).then(() => animation.form.start({ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', height: size.height - 142, width: size.width * 0.8, transition: { duration: 0.84, type: 'spring' } }));
      animation.btnShow.start({ opacity: 0, transition: { duration: 0.3 } }).then(() => animation.btnShow.start({ position: 'absolute', right: 0, top: 0, zIndex: 4 })).then(() => { setIcon(<IoClose />); animation.btnShow.start({ opacity: 1, transition: { duration: 0.84 } }) });
    } else {
      animation.form.start({ borderBottomLeftRadius: '22px', borderBottomRightRadius: '22px', borderTopLeftRadius: '22px', borderTopRightRadius: '22px' , height: '40px', width: '40px', transition: { duration: 0.84, ease: 'anticipate' } }).then(() => animation.form.start({ marginBottom: '60px', transition: { duration: 0.36, ease: 'easeOut' } }));
      animation.btnShow.start({ opacity: 0, transition: { duration: 0.38 } }).then(() => animation.btnShow.start({ position: 'relative' })).then(() => { setIcon(<IoArrowUpOutline />); animation.btnShow.start({ opacity: 1, transition: { duration: 0.42 } }) });
    }
  }, [show]);

  // Return an element
  return (
    <TLogPage.Layout>
      <TLogPage.Background src='/images/jeonju.jpg' />
      <TLogPage.BackgroundCover initial={{ opacity: 0 }} animate={{ opacity: show ? 0.48 : 0.12 }} transition={{ duration: 0.9 }} />
      <TLogPage.Container>
        <TLogPage.ContainerHeader>
          {/* <TLogForm.Title animate={show ? { x: (size.width / 2 * -1) + 236 } : undefined} transition={{ duration: 1.3, type: 'spring' }}>
            <Texty type='bottom' mode='smooth' delay={214}>Jeon ju</Texty>
          </TLogForm.Title> */}
          <TLogTitle pageWidth={size.width} status={show} title='Jeon ju' />
        </TLogPage.ContainerHeader>
        <TLogPage.ContainerBody>
          <StyleForm animate={animation.form}>
            <StyledFormHeader>
              <StyledShowButton initial={false} onClick={onShow} animate={animation.btnShow}>
                {icon}
              </StyledShowButton>
            </StyledFormHeader>
            <StyledFormBody animate={show ? { display: 'block' } : { display: 'none' }} transition={{ delay: 0.46, duration: 0.2 }}>
              <StyledTimelineForm>
                <CustomTimeline items={timelineData[1]} title='11.04.' />
              </StyledTimelineForm>
              <StyledTimelineForm>
                <CustomTimeline items={timelineData[2]} title='11.05.' />
              </StyledTimelineForm>
              <StyledTimelineForm>
                <CustomTimeline items={timelineData[3]} title='11.06.' />
              </StyledTimelineForm>
            </StyledFormBody>
          </StyleForm>
        </TLogPage.ContainerBody>
      </TLogPage.Container>
    </TLogPage.Layout>
  );
}

const StyledTimelineTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;
interface CustomTimelineProps {
  items?: TimelineItemData[];
  title: string;
}
interface TimelineItemData {
  content: string;
  icon?: React.ReactNode;
  images?: string[];
  time: string;
  type?: string;
}
const CustomTimeline = ({ items, title }: CustomTimelineProps): JSX.Element => {
  return (
    <>
      <h2 style={{ marginBottom: '24px', paddingLeft: 'calc(50% - 28px)' }}>{title}</h2>
      <Timeline mode='left'>
        <>{items ? items.map((item: TimelineItemData, index: number): React.ReactNode => (
          <Timeline.Item dot={item.icon ? item.icon : undefined} label={item.time} key={index} >
            <StyledTimelineTitle>{item.content}</StyledTimelineTitle>
            {item.images ? (
              <>{item.images.map((src: string, index: number): React.ReactNode => <Image key={index} src={src} width={200} />)}</>
            ) : (<></>)}
          </Timeline.Item>
        )) : undefined}</>
        <Timeline.Item label=' '> </Timeline.Item>
      </Timeline>
    </>
  );
}