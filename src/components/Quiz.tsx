import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Heart, Star } from 'lucide-react';
import './Quiz.css';

const quizQuestions = [
    {
        question: "What's our favorite thing to do together?",
        options: ['Watch sunsets', 'Go on adventures', 'Cook together', 'Cuddle on the couch'],
        answer: 1,
    },
    {
        question: "What did I first notice about you?",
        options: ['Your smile', 'Your eyes', 'Your laugh', 'Your kindness'],
        answer: 0,
    },
    {
        question: "What's our song?",
        options: ['Perfect - Ed Sheeran', 'All of Me - John Legend', 'A Thousand Years', 'Thinking Out Loud'],
        answer: 2,
    },
];

export default function Quiz() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [showQuiz, setShowQuiz] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const handleAnswer = (index: number) => {
        setSelectedAnswer(index);
        const isCorrect = index === quizQuestions[currentQ].answer;
        if (isCorrect) setScore((s) => s + 1);

        setTimeout(() => {
            setSelectedAnswer(null);
            if (currentQ < quizQuestions.length - 1) {
                setCurrentQ((q) => q + 1);
            } else {
                setShowResult(true);
            }
        }, 800);
    };

    const resetQuiz = () => {
        setCurrentQ(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
    };

    return (
        <>
            <section className="quiz section" id="quiz" ref={ref}>
                <div className="container">
                    <motion.div
                        className="quiz-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="quiz-icon">💝</div>
                        <h2 className="quiz-title">How well do we know each other?</h2>
                        <p className="quiz-description">
                            Take our fun quiz and discover how deeply we understand each other's hearts.
                        </p>
                        <motion.button
                            className="btn btn-burgundy"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { resetQuiz(); setShowQuiz(true); }}
                        >
                            Start the Quiz
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Quiz Modal */}
            <AnimatePresence>
                {showQuiz && (
                    <motion.div
                        className="quiz-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowQuiz(false)}
                    >
                        <motion.div
                            className="quiz-modal"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="quiz-modal-close"
                                onClick={() => setShowQuiz(false)}
                            >
                                <X size={20} />
                            </button>

                            {!showResult ? (
                                <div className="quiz-question-area">
                                    <div className="quiz-progress">
                                        {quizQuestions.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`quiz-progress-dot${i <= currentQ ? ' active' : ''}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="quiz-question-number">
                                        Question {currentQ + 1} of {quizQuestions.length}
                                    </p>
                                    <h3 className="quiz-question-text">
                                        {quizQuestions[currentQ].question}
                                    </h3>
                                    <div className="quiz-options">
                                        {quizQuestions[currentQ].options.map((opt, i) => (
                                            <button
                                                key={i}
                                                className={`quiz-option${selectedAnswer === i
                                                        ? i === quizQuestions[currentQ].answer
                                                            ? ' correct'
                                                            : ' wrong'
                                                        : ''
                                                    }`}
                                                onClick={() => selectedAnswer === null && handleAnswer(i)}
                                                disabled={selectedAnswer !== null}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="quiz-result">
                                    <div className="quiz-result-icon">
                                        {score === quizQuestions.length ? (
                                            <Heart size={48} fill="var(--color-burgundy)" stroke="none" />
                                        ) : (
                                            <Star size={48} fill="var(--accent-gold)" stroke="none" />
                                        )}
                                    </div>
                                    <h3 className="quiz-result-title">
                                        {score === quizQuestions.length
                                            ? 'Perfect Score! 💕'
                                            : score >= quizQuestions.length / 2
                                                ? 'Great job! 🌟'
                                                : 'Nice try! 🌺'}
                                    </h3>
                                    <p className="quiz-result-score">
                                        You got {score} out of {quizQuestions.length} right!
                                    </p>
                                    <p className="quiz-result-message">
                                        {score === quizQuestions.length
                                            ? "You know me so well! We're truly soulmates."
                                            : "We're still learning about each other, and that's beautiful!"}
                                    </p>
                                    <div className="quiz-result-actions">
                                        <motion.button
                                            className="btn btn-burgundy"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={resetQuiz}
                                        >
                                            Try Again
                                        </motion.button>
                                        <motion.button
                                            className="btn btn-outline"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setShowQuiz(false)}
                                        >
                                            Close
                                        </motion.button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
