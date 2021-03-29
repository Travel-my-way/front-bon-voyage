import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Hidden } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';

import questions from './Questions.json';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  addIcon: {
    color: palette.yellow,
    padding: 4,
  },
  answer: {
    fontFamily: 'Libre Franklin',
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '27px',
  },
  answers: {
    padding: 32,
    paddingBottom: 16,
    paddingTop: 32,
    width: '50%',
  },
  answerTitle: {
    '&::after': {
      borderBottom: `solid 8px ${palette.yellow}`,
      content: "''",
      display: 'block',
      marginBottom: '35px !important',
      marginTop: '25px !important',
      width: '35px',
    },
    fontFamily: 'Monument Extended',
    fontSize: '30px',
    fontWeight: 900,
    lineHeight: '120%',
  },
  arrowIcon: {
    color: palette.blue,
    padding: 8,
  },
  container: {
    [breakpoints.only('xs')]: {
      padding: 20,
    },
    border: `solid 10px ${palette.yellow}`,
    color: palette.blue,
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    border: `1px dashed ${palette.blue}`,
    borderRadius: '50%',
    boxSizing: 'border-box',
    height: 40,
    marginLeft: 16,
    width: 40,
  },
  keyword: {
    boxSizing: 'border-box',
    color: palette.paper,
    textStroke: `0.1px ${palette.blue}`,
  },
  question: {
    '&:first-child': {
      backgroundImage: 'none',
    },
    alignItems: 'center',
    backgroundImage: `repeating-linear-gradient(to right, ${palette.blue} 0 3px, transparent 3px 12px)`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 1px',
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
    color: palette.blue,
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
      {questions.map((question: Question, index: number) => {
        let customTextStyles = styles.question;
        let Icon = <AddIcon className={`${styles.icon} ${styles.addIcon}`} />;

        if (index === answerIndex) {
          customTextStyles = styles.selectedQuestion;
          Icon = <ArrowForwardIosIcon className={`${styles.icon} ${styles.arrowIcon}`} />;
        }

        return (
          <Fragment key={question.question}>
            <div className={`${styles.question} ${customTextStyles}`} onClick={() => handleClick(index)}>
              {question.question}
              {Icon}
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
          let Icon = <AddIcon className={`${styles.icon} ${styles.addIcon}`} />;

          if (index === answerIndex) {
            customTextStyles = styles.selectedQuestion;
            Icon = <ArrowForwardIosIcon className={`${styles.icon} ${styles.arrowIcon}`} />;
          }

          return (
            <div key={question} className={`${styles.question} ${customTextStyles}`} onClick={() => handleClick(index)}>
              {question}
              {Icon}
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
      <h3 className={styles.title}>
        Ça pose <span className={styles.keyword}>questions</span>
      </h3>
      <div className={styles.container}>
        <Hidden lgUp>{SmallScreenQuestions()}</Hidden>
        <Hidden mdDown>{LargeScreenQuestions()}</Hidden>
      </div>
    </Fragment>
  );
};

export default Questions;
