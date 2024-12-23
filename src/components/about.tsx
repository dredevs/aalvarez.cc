import React from 'react';
import styles from '../components/modules/about.module.css'; 

const About = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Self-Taught Software Developer from the United States. I'm currently pursuing
                <br />
                full-stack development to create stunning user experiences on the front-end,
                <br />
                and scalable and secure infrastructure on the backend. Also attending
                <br />
                <span className={styles.highlight}>Sacramento State University</span>.
            </p>
            <p className={styles.text}>
            I do enjoy doing any sort of videography and photography. Check it out&nbsp;
            <a href="/project" className={styles.link}>here</a>.
            </p>
        </div>
    );
};

export default About;
