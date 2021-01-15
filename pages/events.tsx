import React, { useState } from 'react';
import Layout from './../components/Layout';
import util from './../styles/util.module.scss';
import styles from './../styles/events.module.scss';
import { read } from 'fs/promises';
import { Style } from 'util';

type type = 'all' | 'food' | 'general' | 'print' | 'performance' | '';
type eventData = {
  name: string | '';
  type: type;
  when?: Date;
  description: string[];
  image?: string;
};

const events: eventData[] = [
  {
    name: '我が輩は猫である',
    type: 'general',
    description: [
      '　吾輩わがはいは猫である。名前はまだ無い。',
      '　どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。',
    ],
    image: './images/blog.webp',
  },
  {
    name: 'イベント2',
    type: 'performance',
    description: [
      '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
      '説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2',
    ],
  },
  {
    name: 'イベント3',
    type: 'general',
    description: [
      '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
      '説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2',
    ],
  },
  {
    name: 'イベント4098',
    type: 'print',
    description: [
      '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
      '説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2',
    ],
  },
  {
    name: 'イベント5',
    type: 'print',
    description: [
      '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
      '説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2',
    ],
  },
  {
    name: 'イベント6',
    type: 'print',
    description: [
      '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
      '説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2',
    ],
  },
  {
    name: 'イベント名',
    type: 'food',
    description: [
      '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
      '説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2',
    ],
  },
  {
    name: 'イベント名',
    type: 'food',
    description: [
      '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
      '説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2',
    ],
  },
  {
    name: 'イベント名',
    type: 'food',
    description: [
      '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
      '説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2',
    ],
  },
];

function TypeSort({
  typeNow,
  changeTypeFunc,
}: {
  readonly typeNow: type;
  readonly changeTypeFunc: Function;
}) {
  return (
    <ul className={styles.sort}>
      <li
        className={typeNow == 'all' && styles.active}
        onClick={() => changeTypeFunc('all')}
      >
        すべて
      </li>
      <li
        className={typeNow == 'food' && styles.active}
        onClick={() => changeTypeFunc('food')}
      >
        食品
      </li>
      <li
        className={typeNow == 'general' && styles.active}
        onClick={() => changeTypeFunc('general')}
      >
        一般
      </li>
      <li
        className={typeNow == 'performance' && styles.active}
        onClick={() => changeTypeFunc('performance')}
      >
        公演
      </li>
      <li
        className={typeNow == 'print' && styles.active}
        onClick={() => changeTypeFunc('print')}
      >
        印刷
      </li>
    </ul>
  );
}

const SortedEvents = React.memo(
  ({ sortType, onClick }: { sortType: type; onClick: Function }) => {
    let key = 0;
    const items = events.map((eventF) => {
      const style: object = React.useMemo(() => {
        return { transform: `rotate(${Math.random() * 8 - 4}deg)` };
      }, []);
      key += 1;
      return (
        (eventF.type == sortType || sortType == 'all') && (
          <li style={style} onClick={() => onClick(eventF)} key={key}>
            {eventF.name}
          </li>
        )
      );
    });
    return <ul className={styles.eventsList}>{items}</ul>;
  }
);

function EventDetail({
  isOpen,
  eventDetailData,
  closeDetailFunc,
}: {
  readonly isOpen: boolean;
  readonly eventDetailData?: eventData;
  readonly closeDetailFunc: Function;
}): JSX.Element {
  return (
    isOpen && (
      <div className={styles.detail}>
        <section className={styles.container}>
          <h2>{`【${eventDetailData.name}】`}</h2>
          {eventDetailData.description.map((paragraph) => {
            return <p>{paragraph}</p>;
          })}
          {eventDetailData.image != undefined && (
            <figure className={styles.imageArea}>
              <img
                src={eventDetailData.image}
                alt={`${eventDetailData.name} | 2021年度文化祭`}
              />
            </figure>
          )}
        </section>
        <button
          className={styles.closeButton}
          onClick={() => closeDetailFunc()}
        >
          ↓閉↓
        </button>
      </div>
    )
  );
}

export const EventContent = React.memo(() => {
  const [activeType, changeActiveType] = useState<type>('all');
  const [detailEventState, changeDetailState] = useState<{
    isOpen: boolean;
    eventDetailData: eventData;
  }>({
    isOpen: false,
    eventDetailData: {
      name: '',
      type: '',
      description: [''],
    },
  });

  const sortEvent = (eventType: type) => {
    changeActiveType(eventType);
  };

  const clickEvent = (detailEvent) => {
    changeDetailState({
      isOpen: true,
      eventDetailData: detailEvent,
    });
  };
  return (
    <>
      <div className={util.section}>
        <h1 className={util.title}>Events</h1>
        <TypeSort typeNow={activeType} changeTypeFunc={sortEvent} />
        <SortedEvents sortType={activeType} onClick={clickEvent} />
      </div>
      <EventDetail
        isOpen={detailEventState.isOpen}
        eventDetailData={detailEventState.eventDetailData}
        closeDetailFunc={() =>
          changeDetailState({
            isOpen: false,
            eventDetailData: detailEventState.eventDetailData,
          })
        }
      />
    </>
  );
});

export default function Events() {
  return (
    <Layout
      pageDescription="2021年XX祭のイベント一覧です"
      pageTitle="イベント"
      pageType="events"
    >
      <div className={`${util.container}`}>
        <div className={util.main}>
          <EventContent />
        </div>
      </div>
    </Layout>
  );
}
