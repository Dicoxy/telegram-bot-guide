import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TelegramBotGuide = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('quickstart');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <div className="mb-4">
      <button
        onClick={() => toggleSection(id)}
        className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 hover:bg-gray-200"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {expandedSection === id ? <ChevronUp /> : <ChevronDown />}
      </button>
      {expandedSection === id && (
        <div className="mt-2 rounded-lg border p-4">{children}</div>
      )}
    </div>
  );

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Помощник для создания постов</CardTitle>
      </CardHeader>
      <CardContent>
        <Section id="quickstart" title="Быстрый старт">
          <p className="mb-4">
            Отправьте голосовое сообщение боту с вашим текстом. Бот автоматически определит тип контента и создаст структурированный пост.
          </p>
          <p className="font-medium">Примеры команд:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>"сделай короткий пост про..." (300-500 символов)</li>
            <li>"сделай средний пост о..." (1000-1500 символов)</li>
            <li>"напиши длинный пост на тему..." (2000-3000 символов)</li>
          </ul>
        </Section>

        <Section id="types" title="Типы постов">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Обучающий материал</h4>
              <p>Команды: "сделай обучающий пост", "напиши обучение"</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Размышление</h4>
              <p>Команды: "напиши мои мысли", "пост-размышление"</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Аналитика</h4>
              <p>Команды: "сделай аналитику", "разбор темы"</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Новость</h4>
              <p>Команды: "напиши новость", "новостной пост"</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Экспертное мнение</h4>
              <p>Команды: "экспертное мнение", "как эксперт"</p>
            </div>
          </div>
        </Section>

        <Section id="tips" title="Советы по использованию">
          <ul className="list-disc pl-6 space-y-2">
            <li>Говорите чётко и структурированно</li>
            <li>Указывайте желаемый тип поста в начале сообщения</li>
            <li>Для лучшего результата используйте голосовые сообщения длительностью до 5 минут</li>
          </ul>
        </Section>
      </CardContent>
    </Card>
  );
};

export default TelegramBotGuide;
