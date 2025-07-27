import styles from './page.module.css';

export default function Schedule() {
  const groups = [
    {
      name: "Group A",
      matches: [
        { time: "18:00", player1: "ทอม ฟอร์ด", player2: "ริคกี วอลเด็น" },
        { time: "19:30", player1: "โจ โอคอนเนอร์", player2: "ฉี ซือ" },
        { time: "21:00", player1: "โจ โอคอนเนอร์", player2: "ริคกี วอลเด็น" },
        { time: "23:00", player1: "ทอม ฟอร์ด", player2: "ฉี ซือ" },
        { time: "00:30", player1: "ฉี ซือ", player2: "ริคกี วอลเด็น" },
        { time: "02:00", player1: "ทอม ฟอร์ด", player2: "โจ โอคอนเนอร์" },
      ],
    },
    {
      name: "Group B",
      matches: [
        { time: "18:00", player1: "ผาง จินชี่", player2: "เบ็น เมอร์เท็นส์" },
        { time: "19:30", player1: "สตีเฟน แม็คไกวร์", player2: "แม็ทธิว เซลท์" },
        { time: "21:00", player1: "สตีเฟน แม็คไกวร์", player2: "เบ็น เมอร์เท็นส์" },
        { time: "23:00", player1: "ผาง จินชี่", player2: "แม็ทธิว เซลท์" },
        { time: "00:30", player1: "แม็ทธิว เซลท์", player2: "เบ็น เมอร์เท็นส์" },
        { time: "02:00", player1: "ผาง จินชี่", player2: "สตีเฟน แม็คไกวร์" },
      ],
    },
  ];

  return (
    <main className={styles.scheduleContainer}>
      <h1>ตารางแข่ง</h1>
      {groups.map((group, index) => (
        <section key={index} className={styles.group}>
          <h2>{group.name}</h2>
          <div className={styles.matches}>
            {group.matches.map((match, idx) => (
              <div key={idx} className={styles.match}>
                <span className={styles.time}>{match.time}</span>
                <span className={styles.player1}>{match.player1}</span>
                <span className={styles.vs}>vs</span>
                <span className={styles.player2}>{match.player2}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
