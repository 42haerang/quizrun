import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronRight,
  Circle,
  ListChecks,
  PencilLine,
  RotateCcw,
  X,
} from 'lucide-react';
import './styles.css';

const chapters = [
  {
    id: 'integrated',
    title: 'I. 통합적 관점',
    short: '인간, 사회, 환경을 바라보는 관점',
    color: '#2dbf8f',
    concepts: [
      '시간적 관점: 역사적 배경과 시대적 맥락에 초점을 두고 사회현상을 이해한다.',
      '공간적 관점: 장소와 지역, 공간적 상호 작용에 초점을 둔다.',
      '사회적 관점: 사회 구조와 사회 제도의 영향력을 살핀다.',
      '윤리적 관점: 도덕적 가치와 윤리적 규범을 중심으로 성찰한다.',
      '통합적 관점은 여러 관점을 종합해 복잡한 사회현상을 균형 있게 이해하는 관점이다.',
    ],
    questions: [
      {
        type: 'ox',
        prompt: '통합적 관점은 시간적, 공간적, 사회적, 윤리적 관점을 종합적으로 고려한다.',
        answer: 'O',
        explanation: '자료의 1-3쪽은 여러 관점을 함께 적용해야 복잡한 사회현상을 파악할 수 있다고 정리한다.',
      },
      {
        type: 'choice',
        prompt: '난민 문제를 역사적 배경과 시대적 맥락 속에서 분석하는 관점은?',
        choices: ['시간적 관점', '공간적 관점', '사회적 관점', '윤리적 관점'],
        answer: '시간적 관점',
        explanation: '시간적 관점은 역사적 배경과 시대적 맥락에 초점을 둔다.',
      },
      {
        type: 'short',
        prompt: '시간적, 공간적, 사회적, 윤리적 관점을 종합적으로 고려하는 관점은?',
        answer: '통합적 관점',
        aliases: ['통합관점'],
        explanation: '통합적 관점은 여러 관점에서 수집한 정보를 비교, 분석해 문제를 해결한다.',
      },
    ],
  },
  {
    id: 'happiness',
    title: 'II. 인간, 사회, 환경과 행복',
    short: '행복의 의미와 기준',
    color: '#ff7a5c',
    concepts: [
      '행복은 일상생활에서 느끼는 만족감이나 즐거움을 뜻하며 기준은 사람마다 다르다.',
      '시대에 따라 행복의 기준은 달라진다. 선사 시대는 생존, 중세는 신앙, 오늘날은 정신적 만족과 여유 등이 중시된다.',
      '지역과 자연환경, 인문환경, 정치적·경제적 여건에 따라 행복의 기준도 달라진다.',
      '진정한 행복은 삶의 궁극적 목적이며, 우리 노력으로 성취할 수 있는 것이다.',
      '행복한 삶을 위해 질 높은 정주 환경, 경제적 안정, 민주주의 발전, 도덕적 실천이 요구된다.',
    ],
    questions: [
      {
        type: 'ox',
        prompt: '행복의 기준은 시대와 지역에 관계없이 항상 동일하다.',
        answer: 'X',
        explanation: '자료의 4-6쪽은 시대, 지역, 정치·경제적 여건에 따라 행복의 기준이 달라진다고 설명한다.',
      },
      {
        type: 'choice',
        prompt: '행복한 삶을 실현하기 위한 조건으로 보기 어려운 것은?',
        choices: ['질 높은 정주 환경', '경제적 안정', '민주주의의 발전', '문화적 차별 확대'],
        answer: '문화적 차별 확대',
        explanation: '행복한 삶에는 안정된 환경, 경제적 안정, 민주주의, 도덕적 실천이 필요하다.',
      },
      {
        type: 'short',
        prompt: '오늘날 행복의 기준으로 물질적 풍요와 함께 중시되는 정신적 조건은?',
        answer: '정신적 만족감',
        aliases: ['정신적 만족', '만족감'],
        explanation: '오늘날에는 경제적 안정뿐 아니라 정신적 만족감, 여유, 건강 등도 중요하다.',
      },
    ],
  },
  {
    id: 'nature',
    title: 'III. 자연환경과 인간',
    short: '자연환경, 재해, 자연관',
    color: '#49a3f1',
    concepts: [
      '자연환경은 인간 생활을 둘러싼 자연계의 모든 요소가 이루어진 환경이다.',
      '기후와 지형은 생활양식과 농업, 산업 발달에 많은 영향을 준다.',
      '자연재해는 기후와 지형 등이 인간 생활을 위협하며 피해를 주는 현상이다.',
      '국가는 재해 예방과 안전한 환경 보장을 위해 노력해야 하며, 시민도 재해 대응 능력을 길러야 한다.',
      '인간 중심주의 자연관은 자연을 인간의 이익 중심으로 보고, 생태 중심주의 자연관은 생태계 자체의 가치를 존중한다.',
    ],
    questions: [
      {
        type: 'ox',
        prompt: '자연재해는 정확한 예측과 완전한 극복이 쉬운 현상이다.',
        answer: 'X',
        explanation: '자료의 8쪽은 자연재해가 정확한 예측과 완전한 극복이 어려워 큰 피해를 낳는다고 정리한다.',
      },
      {
        type: 'choice',
        prompt: '열대 기후 지역의 생활 모습으로 알맞은 것은?',
        choices: ['가볍고 얇은 옷차림', '두껍고 무거운 옷차림', '이글루 발달', '순록 유목 중심'],
        answer: '가볍고 얇은 옷차림',
        explanation: '자료의 7쪽은 열대 기후에서 가볍고 얇은 옷차림과 고상 가옥 등이 나타난다고 설명한다.',
      },
      {
        type: 'short',
        prompt: '자연의 내재적 가치를 존중하고 생태계 자체의 가치를 강조하는 자연관은?',
        answer: '생태 중심주의',
        aliases: ['생태중심주의', '생태 중심주의 자연관'],
        explanation: '생태 중심주의 자연관은 인간을 포함한 모든 생명체를 자연의 일부로 본다.',
      },
    ],
  },
  {
    id: 'culture',
    title: 'IV. 문화와 다양성',
    short: '문화권, 문화 변동, 다문화 사회',
    color: '#7c6ee6',
    concepts: [
      '문화는 인간이 환경과 상호 작용하며 형성한 생활양식이다.',
      '문화권은 문화적 특성이 유사하게 나타나는 비교적 넓은 공간 범위이다.',
      '문화 변동의 내부 요인은 발명과 발견, 외부 요인은 직접 전파, 간접 전파, 자극 전파이다.',
      '문화 접변의 결과에는 문화 동화, 문화 공존, 문화 융합이 있다.',
      '문화 상대주의는 문화를 그 사회의 환경과 맥락 속에서 이해하는 태도이며, 보편 윤리와 함께 고려해야 한다.',
      '다문화 사회는 다양한 인종, 민족, 종교, 언어 배경을 가진 사람들이 함께 살아가는 사회이다.',
    ],
    questions: [
      {
        type: 'ox',
        prompt: '문화 상대주의는 모든 문화를 그 사회의 환경과 맥락 속에서 이해하려는 태도이다.',
        answer: 'O',
        explanation: '자료의 4-5쪽은 문화 상대주의가 문화가 형성된 배경과 맥락을 고려하는 태도라고 설명한다.',
      },
      {
        type: 'choice',
        prompt: '존재하지 않았던 새로운 문화 요소를 만들어 내는 문화 변동 요인은?',
        choices: ['발명', '발견', '직접 전파', '간접 전파'],
        answer: '발명',
        explanation: '발명은 새로운 문화 요소를 만들어 내는 것이고, 발견은 알려지지 않았던 요소를 찾아내는 것이다.',
      },
      {
        type: 'short',
        prompt: '다양한 인종, 민족, 종교, 언어 배경을 가진 사람들이 함께 살아가는 사회는?',
        answer: '다문화 사회',
        aliases: ['다문화사회'],
        explanation: '자료의 5-6쪽은 다문화 사회의 의미와 우리나라의 다문화 현황을 정리한다.',
      },
    ],
  },
];

const counts = [5, 10, 20];

function buildQuiz(chapter, count) {
  return Array.from({ length: count }, (_, index) => {
    const base = chapter.questions[index % chapter.questions.length];
    return { ...base, id: `${chapter.id}-${index}`, number: index + 1 };
  });
}

function normalize(value) {
  return value.replace(/\s+/g, '').trim().toLowerCase();
}

function isCorrect(question, value) {
  if (!value) return false;
  if (question.type === 'short') {
    const answers = [question.answer, ...(question.aliases ?? [])].map(normalize);
    return answers.includes(normalize(value));
  }
  return value === question.answer;
}

function App() {
  const [screen, setScreen] = useState('setup');
  const [selectedChapterId, setSelectedChapterId] = useState(chapters[0].id);
  const [questionCount, setQuestionCount] = useState(10);
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [typed, setTyped] = useState('');
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState([]);

  const chapter = chapters.find((item) => item.id === selectedChapterId) ?? chapters[0];
  const current = quiz[index];
  const progress = quiz.length ? ((index + 1) / quiz.length) * 100 : 0;
  const currentValue = current?.type === 'short' ? typed : selected;
  const correct = current ? isCorrect(current, currentValue) : false;

  function startQuiz() {
    setQuiz(buildQuiz(chapter, questionCount));
    setIndex(0);
    setSelected('');
    setTyped('');
    setChecked(false);
    setResults([]);
    setScreen('quiz');
  }

  function checkAnswer() {
    if (!currentValue) return;
    setChecked(true);
  }

  function nextQuestion() {
    const nextResults = [
      ...results,
      {
        id: current.id,
        correct: isCorrect(current, currentValue),
        type: current.type,
      },
    ];

    if (index + 1 >= quiz.length) {
      setResults(nextResults);
      setScreen('result');
      return;
    }

    setResults(nextResults);
    setIndex(index + 1);
    setSelected('');
    setTyped('');
    setChecked(false);
  }

  function resetAll() {
    setScreen('setup');
    setQuiz([]);
    setIndex(0);
    setSelected('');
    setTyped('');
    setChecked(false);
    setResults([]);
  }

  return (
    <main className="app">
      <header className="topbar">
        <button className="iconButton" aria-label="뒤로" onClick={screen === 'setup' ? undefined : resetAll}>
          {screen === 'setup' ? <BookOpen size={20} /> : <ArrowLeft size={20} />}
        </button>
        <div>
          <p className="brand">QuizRun</p>
          <h1>{screen === 'setup' ? '퀴즈 시작' : chapter.title}</h1>
        </div>
      </header>

      {screen === 'setup' && (
        <section className="setup">
          <div className="sectionTitle">
            <span>1</span>
            <div>
              <h2>문제 개수</h2>
              <p>이번에 풀 문항 수를 고르세요.</p>
            </div>
          </div>
          <div className="countGrid" role="radiogroup" aria-label="문제 개수">
            {counts.map((count) => (
              <button
                key={count}
                className={`selectBox ${questionCount === count ? 'active' : ''}`}
                onClick={() => setQuestionCount(count)}
              >
                <strong>{count}</strong>
                <span>문제</span>
              </button>
            ))}
          </div>

          <div className="sectionTitle">
            <span>2</span>
            <div>
              <h2>대단원</h2>
              <p>사진 자료에서 뽑은 단원입니다.</p>
            </div>
          </div>
          <div className="chapterList">
            {chapters.map((item) => (
              <button
                key={item.id}
                className={`chapter ${selectedChapterId === item.id ? 'active' : ''}`}
                onClick={() => setSelectedChapterId(item.id)}
              >
                <i style={{ background: item.color }} />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.short}</small>
                </span>
                {selectedChapterId === item.id ? <Check size={18} /> : <ChevronRight size={18} />}
              </button>
            ))}
          </div>

          <div className="conceptPreview">
            <strong>핵심 개념</strong>
            <ul>
              {chapter.concepts.slice(0, 4).map((concept) => (
                <li key={concept}>{concept}</li>
              ))}
            </ul>
          </div>

          <button className="primaryAction" onClick={startQuiz}>
            시작하기
            <ChevronRight size={20} />
          </button>
        </section>
      )}

      {screen === 'quiz' && current && (
        <section className="quiz">
          <div className="progressLine">
            <span>{current.number} / {quiz.length}</span>
            <div><i style={{ width: `${progress}%` }} /></div>
          </div>

          <div className={`questionCard ${checked ? (correct ? 'correct' : 'wrong') : ''}`}>
            <div className="typeLabel">
              {current.type === 'ox' && <Circle size={16} />}
              {current.type === 'choice' && <ListChecks size={16} />}
              {current.type === 'short' && <PencilLine size={16} />}
              {current.type === 'ox' ? 'OX' : current.type === 'choice' ? '객관식' : '단답형'}
            </div>
            <h2>{current.prompt}</h2>

            {current.type === 'ox' && (
              <div className="oxGrid">
                {['O', 'X'].map((value) => (
                  <button
                    key={value}
                    className={`answer big ${selected === value ? 'selected' : ''}`}
                    disabled={checked}
                    onClick={() => setSelected(value)}
                  >
                    {value === 'O' ? <Circle size={28} /> : <X size={30} />}
                    <span>{value}</span>
                  </button>
                ))}
              </div>
            )}

            {current.type === 'choice' && (
              <div className="choiceList">
                {current.choices.map((choice) => (
                  <button
                    key={choice}
                    className={`answer ${selected === choice ? 'selected' : ''}`}
                    disabled={checked}
                    onClick={() => setSelected(choice)}
                  >
                    <span>{choice}</span>
                    {selected === choice && <Check size={18} />}
                  </button>
                ))}
              </div>
            )}

            {current.type === 'short' && (
              <label className="shortAnswer">
                <span>답 입력</span>
                <input
                  value={typed}
                  disabled={checked}
                  onChange={(event) => setTyped(event.target.value)}
                  placeholder="정답을 입력하세요"
                />
              </label>
            )}
          </div>

          {checked && (
            <div className={`feedback ${correct ? 'correct' : 'wrong'}`}>
              <strong>{correct ? '정답이에요' : `정답: ${current.answer}`}</strong>
              <p>{current.explanation}</p>
            </div>
          )}

          <button
            className="primaryAction sticky"
            onClick={checked ? nextQuestion : checkAnswer}
            disabled={!currentValue}
          >
            {checked ? (index + 1 === quiz.length ? '결과 보기' : '다음 문제') : '정답 확인'}
            <ChevronRight size={20} />
          </button>
        </section>
      )}

      {screen === 'result' && (
        <section className="result">
          <div className="scoreMark">
            {results.filter((item) => item.correct).length}
            <span>/{results.length}</span>
          </div>
          <h2>풀이 완료</h2>
          <p>{chapter.title}에서 {questionCount}문제를 풀었습니다.</p>
          <div className="resultRows">
            {['ox', 'choice', 'short'].map((type) => {
              const label = type === 'ox' ? 'OX' : type === 'choice' ? '객관식' : '단답형';
              const rows = results.filter((item) => item.type === type);
              const ok = rows.filter((item) => item.correct).length;
              return (
                <div key={type}>
                  <span>{label}</span>
                  <strong>{ok}/{rows.length}</strong>
                </div>
              );
            })}
          </div>
          <button className="primaryAction" onClick={resetAll}>
            다시 풀기
            <RotateCcw size={18} />
          </button>
        </section>
      )}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
