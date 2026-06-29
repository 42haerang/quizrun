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
    facts: [
      {
        term: '시간적 관점',
        definition: '역사적 배경과 시대적 맥락에 초점을 두고 사회현상을 이해하는 관점',
        examples: ['난민 문제의 역사적 배경 분석', '과거 사건을 바탕으로 현재 사회현상 이해', '시대 변화에 따른 해결 방안 탐색'],
      },
      {
        term: '공간적 관점',
        definition: '장소와 지역, 공간적 상호 작용에 초점을 두고 인간과 세상을 이해하는 관점',
        examples: ['자연재해가 많이 일어나는 지역 분석', '지역별 자원 갈등 파악', '공간적 분포와 이동 경로 분석'],
      },
      {
        term: '사회적 관점',
        definition: '사회 구조와 사회 제도의 영향력에 초점을 두고 인간과 세상을 이해하는 관점',
        examples: ['사회 문제의 제도적 원인 파악', '정책과 제도 개선 방안 제안', '사회 구조가 개인에게 미치는 영향 분석'],
      },
      {
        term: '윤리적 관점',
        definition: '도덕적 가치와 윤리적 규범을 중심으로 문제를 탐구하고 성찰하는 관점',
        examples: ['인권과 인간 존엄성의 관점에서 판단', '도덕적 가치와 책임 검토', '정의로운 해결 방향 탐색'],
      },
      {
        term: '통합적 관점',
        definition: '시간적, 공간적, 사회적, 윤리적 관점을 종합적으로 고려해 사회현상을 이해하는 관점',
        examples: ['다양한 관점에서 정보 수집', '정보 비교·분석 및 관계 파악', '종합적 관점에서 문제 해결'],
      },
    ],
  },
  {
    id: 'happiness',
    title: 'II. 인간, 사회, 환경과 행복',
    short: '행복의 의미, 기준, 조건',
    color: '#ff7a5c',
    facts: [
      {
        term: '행복',
        definition: '일상생활에서 느끼는 만족감이나 즐거움으로, 개인의 가치관과 경험에 따라 기준이 달라지는 것',
        examples: ['만족감', '즐거움', '개인의 가치관에 따른 다양한 기준'],
      },
      {
        term: '시대에 따른 행복 기준',
        definition: '시대의 지배적 가치나 상황에 따라 달라지는 행복의 기준',
        examples: ['선사 시대의 생존', '중세 시대의 신앙', '오늘날의 정신적 만족과 여유'],
      },
      {
        term: '지역에 따른 행복 기준',
        definition: '자연환경, 인문환경, 정치적·경제적 여건에 따라 달라지는 행복의 기준',
        examples: ['자연환경에서 얻기 어려운 것의 충족', '정치적 안정', '경제적 발전'],
      },
      {
        term: '진정한 행복',
        definition: '삶의 궁극적 목적이며 우리 노력으로 성취할 수 있는 행복',
        examples: ['삶의 목적 성찰', '일시적 만족을 넘는 행복', '꾸준한 노력으로 성취'],
      },
      {
        term: '행복한 삶의 조건',
        definition: '질 높은 정주 환경, 경제적 안정, 민주주의 발전, 도덕적 실천 등이 조화롭게 충족되는 것',
        examples: ['질 높은 정주 환경', '경제적 안정', '민주주의 발전', '도덕적 실천'],
      },
    ],
  },
  {
    id: 'happiness-philosophy',
    title: 'II-1. 철학자의 행복론',
    short: '동서양 사상가가 본 행복',
    color: '#f3b23c',
    facts: [
      {
        term: '아리스토텔레스',
        definition: '행복을 인간 존재의 목적이자 이유로 보고, 이성의 기능이 잘 발휘될 때 달성된다고 본 사상가',
        examples: ['이성의 기능 발휘', '인간 존재의 목적', '최고선으로서의 행복'],
      },
      {
        term: '에피쿠로스',
        definition: '육체에 고통이 없고 마음에 불안이 없는 평온한 삶을 행복으로 본 사상가',
        examples: ['육체의 고통이 없음', '마음의 불안이 없음', '평온한 삶'],
      },
      {
        term: '스토아학파',
        definition: '정념에 방해받지 않는 초연한 태도로 자연의 질서에 따라 사는 것을 행복으로 본 사상',
        examples: ['자연의 질서에 따름', '정념에 휘둘리지 않음', '초연한 태도'],
      },
      {
        term: '칸트',
        definition: '자신의 복지와 처지에 만족하는 것보다 도덕 법칙을 실천하는 사람이 행복을 누릴 자격이 있다고 본 사상가',
        examples: ['도덕 법칙 실천', '행복을 누릴 자격', '인간으로서 마땅히 지켜야 할 법칙'],
      },
      {
        term: '벤담',
        definition: '쾌락의 충족을 행복으로 보고 최대 다수의 최대 행복을 가져다주는 행위를 중시한 사상가',
        examples: ['쾌락의 충족', '최대 다수의 최대 행복', '공리주의'],
      },
      {
        term: '불교',
        definition: '나라는 의식을 벗어나 고통받는 중생을 구제하여 해탈에 이르는 것을 행복으로 보는 동양 사상',
        examples: ['해탈', '고통받는 중생 구제', '나라는 의식에서 벗어남'],
      },
      {
        term: '유교',
        definition: '도덕적 본성을 보존하고 함양하며 다른 사람과 더불어 살아가며 인을 실현하는 것을 행복으로 보는 동양 사상',
        examples: ['인의 실현', '도덕적 본성 함양', '다른 사람과 더불어 살아감'],
      },
      {
        term: '도가',
        definition: '타고난 그대로의 본성에 따라 인위적인 것을 더하지 않고 자연 그대로 살아가는 것을 행복으로 보는 동양 사상',
        examples: ['자연 그대로의 삶', '인위적인 것 배제', '타고난 본성에 따름'],
      },
    ],
  },
  {
    id: 'nature',
    title: 'III. 자연환경과 인간',
    short: '자연환경, 재해, 자연관',
    color: '#49a3f1',
    facts: [
      {
        term: '자연환경',
        definition: '인간 생활을 둘러싼 자연계의 모든 요소가 이루어진 환경',
        examples: ['기후', '지형', '토양', '식생'],
      },
      {
        term: '기후와 인간 생활',
        definition: '기후에 따라 생활양식과 농업 방식이 다르게 나타나는 관계',
        examples: ['열대 기후의 얇은 옷차림', '건조 기후의 유목과 오아시스 농업', '냉대 기후의 임업'],
      },
      {
        term: '지형과 인간 생활',
        definition: '산지, 평야, 해안, 하천 등 지형이 인구 분포와 산업 발달에 영향을 주는 관계',
        examples: ['평야 지역의 도시 발달', '산지 지역의 임업', '해안 지역의 어업과 수산업'],
      },
      {
        term: '자연재해',
        definition: '기후와 지형 등 자연환경의 요소가 인간 생활을 위협하며 피해를 주는 현상',
        examples: ['홍수', '가뭄', '태풍', '지진', '화산 활동'],
      },
      {
        term: '생태 중심주의 자연관',
        definition: '생태계의 모든 것은 나름대로 존재 이유가 있으므로 그 자체의 가치를 존중해야 한다고 보는 관점',
        examples: ['모든 생명체를 자연의 일부로 봄', '자연의 내재적 가치 존중', '생태계 보호 중시'],
      },
      {
        term: '인간 중심주의 자연관',
        definition: '자연을 바라볼 때 인간의 이익이나 행복을 중심으로 고려하는 관점',
        examples: ['자연을 인간 욕구 충족의 대상으로 봄', '개발과 이용 중시', '데카르트와 베이컨'],
      },
    ],
  },
  {
    id: 'culture',
    title: 'IV. 문화와 다양성',
    short: '문화권, 문화 변동, 다문화 사회',
    color: '#7c6ee6',
    facts: [
      {
        term: '문화',
        definition: '인간이 환경과 상호 작용하면서 형성한 모든 생활양식',
        examples: ['의식주', '종교', '언어', '예술', '관습'],
      },
      {
        term: '문화권',
        definition: '문화적 특성이 유사하게 나타나는 비교적 넓은 공간 범위',
        examples: ['동양 문화권', '유럽 문화권', '아메리카 문화권', '건조 문화권'],
      },
      {
        term: '발명',
        definition: '존재하지 않았던 새로운 문화 요소를 만들어 내는 것',
        examples: ['바퀴', '세탁기', '스마트폰'],
      },
      {
        term: '발견',
        definition: '존재했으나 알려지지 않았던 문화 요소를 찾아내는 것',
        examples: ['불', '전기', '지하자원'],
      },
      {
        term: '문화 접변',
        definition: '서로 다른 사회의 문화가 접촉하여 문화에 변화가 나타나는 현상',
        examples: ['문화 동화', '문화 공존', '문화 융합'],
      },
      {
        term: '문화 상대주의',
        definition: '문화를 그 사회의 환경과 맥락 속에서 이해하려는 태도',
        examples: ['각 문화의 가치 존중', '문화 간 평화로운 공존', '문화의 다양성 보존'],
      },
      {
        term: '다문화 사회',
        definition: '다양한 인종, 민족, 종교, 언어 등 여러 문화적 배경을 가진 사람들이 함께 살아가는 사회',
        examples: ['국내 거주 외국인 증가', '다양한 문화 공존', '사회적 포용 필요'],
      },
    ],
  },
];

const counts = [10, 20, 30, 50, 100];

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function unique(items) {
  return [...new Set(items)];
}

function makeChoices(correct, candidates, size = 4) {
  return shuffle(unique([correct, ...shuffle(candidates.filter((item) => item !== correct))])).slice(0, size);
}

function makeWrongFact(fact, allFacts) {
  const candidates = allFacts.filter((item) => item.term !== fact.term);
  return shuffle(candidates)[0] ?? fact;
}

function questionVariants(fact, allFacts) {
  const otherTerms = allFacts.map((item) => item.term);
  const otherDefinitions = allFacts.map((item) => item.definition);
  const otherExamples = allFacts.flatMap((item) => item.examples);
  const wrongFact = makeWrongFact(fact, allFacts);
  const example = shuffle(fact.examples)[0];
  const wrongDefinition = wrongFact.definition;

  return [
    {
      type: 'short',
      prompt: `다음 설명에 해당하는 개념은? ${fact.definition}`,
      answer: fact.term,
      aliases: [fact.term.replace(/\s+/g, '')],
      explanation: `${fact.term}: ${fact.definition}`,
    },
    {
      type: 'short',
      prompt: `빈칸에 들어갈 개념은? ____은/는 ${fact.definition}`,
      answer: fact.term,
      aliases: [fact.term.replace(/\s+/g, '')],
      explanation: `${fact.term}: ${fact.definition}`,
    },
    {
      type: 'short',
      prompt: `다음 예시와 가장 관련 깊은 개념은? ${example}`,
      answer: fact.term,
      aliases: [fact.term.replace(/\s+/g, '')],
      explanation: `${example}은/는 ${fact.term}과 관련된다.`,
    },
    {
      type: 'choice',
      prompt: `다음 설명에 해당하는 개념은? ${fact.definition}`,
      choices: makeChoices(fact.term, otherTerms),
      answer: fact.term,
      explanation: `${fact.term}은/는 ${fact.definition}`,
    },
    {
      type: 'ox',
      prompt: `${fact.term}은/는 ${fact.definition}`,
      answer: 'O',
      explanation: `${fact.term}의 핵심 의미와 일치한다.`,
    },
    {
      type: 'ox',
      prompt: `${fact.term}은/는 ${wrongDefinition}`,
      answer: 'X',
      explanation: `이 설명은 ${wrongFact.term}에 더 가깝다. ${fact.term}은/는 ${fact.definition}`,
    },
    {
      type: 'choice',
      prompt: `${fact.term}의 예시 또는 관련 내용으로 알맞은 것은?`,
      choices: makeChoices(example, otherExamples),
      answer: example,
      explanation: `${example}은/는 ${fact.term}과 관련된다.`,
    },
    {
      type: 'choice',
      prompt: `${fact.term}에 대한 설명으로 알맞은 것은?`,
      choices: makeChoices(fact.definition, otherDefinitions),
      answer: fact.definition,
      explanation: `${fact.term}의 정확한 설명이다.`,
    },
  ].map((variant) => ({
    ...variant,
    term: fact.term,
    chapterTitle: fact.chapterTitle,
  }));
}

function buildQuiz(selectedChapters, count) {
  const facts = selectedChapters.flatMap((chapter) =>
    chapter.facts.map((fact) => ({ ...fact, chapterTitle: chapter.title })),
  );
  const variants = shuffle(facts.flatMap((fact) => questionVariants(fact, facts)));
  const shortQuestions = shuffle(variants.filter((item) => item.type === 'short'));
  const choiceQuestions = shuffle(variants.filter((item) => item.type === 'choice'));
  const oxQuestions = shuffle(variants.filter((item) => item.type === 'ox'));
  const pattern = ['short', 'choice', 'short', 'ox', 'short', 'choice', 'ox'];
  const pools = {
    short: shortQuestions,
    choice: choiceQuestions,
    ox: oxQuestions,
  };
  const cursors = {
    short: 0,
    choice: 0,
    ox: 0,
  };

  return Array.from({ length: count }, (_, index) => {
    const preferredType = pattern[index % pattern.length];
    const preferredPool = pools[preferredType];
    const fallbackPool = variants;
    const pool = preferredPool.length ? preferredPool : fallbackPool;
    const cursor = preferredPool.length ? cursors[preferredType]++ : index;
    const base = pool[cursor % pool.length];
    return { ...base, id: `${base.chapterTitle}-${base.term}-${index}`, number: index + 1 };
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
  const [selectedChapterIds, setSelectedChapterIds] = useState([chapters[0].id]);
  const [questionCount, setQuestionCount] = useState(20);
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [typed, setTyped] = useState('');
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState([]);

  const selectedChapters = chapters.filter((item) => selectedChapterIds.includes(item.id));
  const current = quiz[index];
  const progress = quiz.length ? ((index + 1) / quiz.length) * 100 : 0;
  const currentValue = current?.type === 'short' ? typed : selected;
  const correct = current ? isCorrect(current, currentValue) : false;
  const quizTitle = selectedChapters.length === 1 ? selectedChapters[0].title : '통합 퀴즈';

  function toggleChapter(chapterId) {
    setSelectedChapterIds((currentIds) => {
      if (currentIds.includes(chapterId)) {
        return currentIds.length === 1 ? currentIds : currentIds.filter((id) => id !== chapterId);
      }
      return [...currentIds, chapterId];
    });
  }

  function toggleAllChapters() {
    setSelectedChapterIds((currentIds) =>
      currentIds.length === chapters.length ? [chapters[0].id] : chapters.map((chapter) => chapter.id),
    );
  }

  function startQuiz() {
    setQuiz(buildQuiz(selectedChapters, questionCount));
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
          <h1>{screen === 'setup' ? '퀴즈 시작' : quizTitle}</h1>
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
              <h2>대단원 선택</h2>
              <p>{selectedChapters.length}개 단원 선택됨</p>
            </div>
          </div>
          <div className="chapterList">
            <button className="chapter allToggle" onClick={toggleAllChapters}>
              <i style={{ background: '#20242a' }} />
              <span>
                <strong>전체 대단원</strong>
                <small>선택한 단원 개념을 합쳐서 자동 출제</small>
              </span>
              {selectedChapterIds.length === chapters.length ? <Check size={18} /> : <ChevronRight size={18} />}
            </button>
            {chapters.map((item) => (
              <button
                key={item.id}
                className={`chapter ${selectedChapterIds.includes(item.id) ? 'active' : ''}`}
                onClick={() => toggleChapter(item.id)}
              >
                <i style={{ background: item.color }} />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.short}</small>
                </span>
                {selectedChapterIds.includes(item.id) ? <Check size={18} /> : <ChevronRight size={18} />}
              </button>
            ))}
          </div>

          <div className="conceptPreview">
            <strong>선택한 단원 핵심 개념</strong>
            {selectedChapters.map((chapter) => (
              <div className="conceptGroup" key={chapter.id}>
                <span>{chapter.title}</span>
                <ul>
                  {chapter.facts.slice(0, 3).map((fact) => (
                    <li key={fact.term}>{fact.term}: {fact.definition}</li>
                  ))}
                </ul>
              </div>
            ))}
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
            <p className="questionSource">{current.chapterTitle}</p>
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
          <p>{selectedChapters.map((chapter) => chapter.title).join(', ')}에서 {questionCount}문제를 풀었습니다.</p>
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
