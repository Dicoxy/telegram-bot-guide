import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TelegramBotGuide: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState('quickstart');

  const toggleSection = (section: string): void => {
    if (expandedSection === section) {
      setExpandedSection('quickstart');
    } else {
      setExpandedSection(section);
    }
  };

  type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
  };

  const Section: React.FC<SectionProps> = ({ id, title, children }) => (
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
    <Card className="w-full max-w-3xl mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-black">Помощник для создания постов из ваших идей</CardTitle>
      </CardHeader>
      <CardContent className="text-black">
        <Section id="quickstart" title="Как это работает">
          <p className="mb-4 text-black">
            Этот бот - ваш личный стенографист. Он превращает ваши надиктованные мысли и идеи в структурированные посты. 
            Бот не генерирует контент сам - он помогает оформить ваши собственные мысли в читаемый формат.
          </p>
          <p className="mb-4 text-black">
            Просто надиктуйте то, что хотите рассказать, а бот структурирует ваши мысли и оформит их в пост, сохранив ваш авторский стиль.
          </p>
          <p className="font-medium text-black mb-2">Примеры использования:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 text-black">
            <li>&quot;Запиши мои мысли о прошедшем мероприятии...&quot; [надиктуйте ваши впечатления]</li>
            <li>&quot;Оформи пост из моего рассказа о...&quot; [поделитесь вашей историей]</li>
            <li>&quot;Сделай из моих мыслей аналитический разбор...&quot; [надиктуйте ваш анализ]</li>
          </ul>
        </Section>

        <Section id="types" title="Форматы постов">
          <div className="space-y-4 text-black">
            <div>
              <h4 className="font-medium mb-2">Обучающий материал</h4>
              <p>Когда вы хотите поделиться знаниями: &quot;Запиши обучающий материал о том, как я...&quot;</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Размышление</h4>
              <p>Для ваших мыслей и рассуждений: &quot;Оформи мои размышления о...&quot;</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Аналитика</h4>
              <p>Для структурированного анализа: &quot;Сделай аналитический разбор из моего рассказа о...&quot;</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Новость</h4>
              <p>Для важных событий: &quot;Оформи мой рассказ о событии в новостной формат...&quot;</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Экспертное мнение</h4>
              <p>Для профессиональных суждений: &quot;Запиши мою экспертную оценку...&quot;</p>
            </div>
          </div>
        </Section>

        <Section id="tips" title="Как получить лучший результат">
          <ul className="list-disc pl-6 space-y-2 text-left text-black">
            <li>В начале укажите желаемый формат поста</li>
            <li>Излагайте мысли последовательно, как если бы вы рассказывали историю</li>
            <li>Для качественной записи используйте голосовые сообщения до 5 минут</li>
            <li>Помните: бот структурирует ваши мысли, но не создаёт контент за вас</li>
          </ul>
        </Section>
      </CardContent>
    </Card>
);
};

export default TelegramBotGuide;