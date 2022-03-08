import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Hidden } from '@material-ui/core';

import ArrowInCircle2 from '../../Assets/Icons/ArrowInCircle2.svg';
import AddIconInCircle2 from '../../Assets/Icons/AddIconInCircle2.svg';

import questions from './Questions.json';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  answer: {
    fontFamily: 'Libre Franklin',
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '27px',
  },
  answers: {
    backgroundColor: 'white',
    padding: 32,
    paddingBottom: 16,
    paddingTop: 32,
    width: '50%',
  },
  answerTitle: {
    fontFamily: 'Monument Extended',
    fontSize: '30px',
    fontWeight: 900,
    lineHeight: '120%',
  },
  container: {
    [breakpoints.only('xs')]: {
      padding: 20,
    },
    border: `solid 3px ${palette.black2}`,
    boxShadow: '-4px 5px 0px #F2CD70',
    color: palette.black2,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 172,
  },
  icon: {
    marginLeft: 28,
  },
  question: {
    '&:first-child': {
      backgroundImage: 'none',
    },
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'Libre Franklin',
    fontSize: '20px',
    fontWeight: 300,
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingTop: 16,
  },
  questions: {
    [breakpoints.down('md')]: {
      width: '100%',
    },
    alignItems: 'space-between',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: 32,
    paddingBottom: 16,
    paddingTop: 16,
    width: '50%',
  },
  selectedQuestion: {
    fontFamily: 'Monument Extended',
    fontSize: '18px',
    fontWeight: 900,
  },
  title: {
    [breakpoints.only('xs')]: {
      fontSize: '35px',
    },
    '&::after': {
      borderBottom: `solid 8px ${palette.yellow}`,
      content: "''",
      display: 'block',
      margin: 'auto',
      marginBottom: '78px',
      marginTop: '20px !important',
      width: '50px',
    },
    color: palette.black2,
    fontFamily: 'Monument Extended',
    fontSize: '45px',
    textAlign: 'center',
  },
}));

type Question = {
  question: string;
  answers: string[];
};

const SmallScreenQuestions = (): JSX.Element => {
  const styles = useStyles();
  const [answerIndex, setSelectedAnswerIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (index !== answerIndex) {
      setSelectedAnswerIndex(index);
    } else {
      setSelectedAnswerIndex(null);
    }
  };

  return (
    <div className={styles.questions}>
      {questions.map(({ question }: Question, index: number) => {
        let customTextStyles = styles.question;
        let Icon = AddIconInCircle2;

        if (index === answerIndex) {
          customTextStyles = styles.selectedQuestion;
          Icon = ArrowInCircle2;
        }

        return (
          <Fragment key={question}>
            <div className={`${styles.question} ${customTextStyles}`} onClick={() => handleClick(index)}>
              {question}
              <img src={Icon} className={styles.icon} />
            </div>
            <Collapse in={answerIndex === index}>
              {typeof answerIndex === 'number' &&
                questions[answerIndex].answers.map((answer) => (
                  <p key={answer} className={styles.answer}>
                    {answer}
                  </p>
                ))}
            </Collapse>
          </Fragment>
        );
      })}
    </div>
  );
};

const LargeScreenQuestions = () => {
  const styles = useStyles();
  const [answerIndex, setSelectedAnswerIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedAnswerIndex(index);
  };

  return (
    <Fragment>
      <div className={styles.questions}>
        {questions.map(({ question }: Question, index: number) => {
          let customTextStyles = styles.question;
          let Icon = AddIconInCircle2;

          if (index === answerIndex) {
            customTextStyles = styles.selectedQuestion;
            Icon = ArrowInCircle2;
          }

          return (
            <div key={question} className={`${styles.question} ${customTextStyles}`} onClick={() => handleClick(index)}>
              {question}
              <img src={Icon} className={styles.icon} />
            </div>
          );
        })}
      </div>
      <div className={styles.answers}>
        <div className={styles.answerTitle}>{questions[answerIndex].question}</div>
        {questions[answerIndex].answers.map((answer) => (
          <p key={answer} className={styles.answer}>
            {answer}
          </p>
        ))}
      </div>
    </Fragment>
  );
};

const Questions = (): JSX.Element => {
  const styles = useStyles();

  return (
    <Fragment>
      <h3 className={styles.title}>Ça pose questions</h3>
      <div className={styles.container}>
        <Hidden lgUp>{SmallScreenQuestions()}</Hidden>
        <Hidden mdDown>{LargeScreenQuestions()}</Hidden>
      </div>
    </Fragment>
  );
};

export default Questions;
