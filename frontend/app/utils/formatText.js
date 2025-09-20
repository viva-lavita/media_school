/**
 * Форматирует текст с переносами строк в HTML с абзацами
 * @param {string} text - Исходный текст с переносами строк
 * @returns {JSX.Element} - Отформатированный текст с абзацами
 */
export const formatText = (text) => {
  if (!text) return null;

  // Разделяем текст по двойным переносам строк (пустые строки между абзацами)
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());

  if (paragraphs.length === 0) {
    return <span>{text}</span>;
  }

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        // Разделяем абзац на строки для обработки
        const lines = paragraph.split('\n').filter(line => line.trim());

        if (lines.length === 1) {
          // Если в абзаце только одна строка, отображаем как <p>
          return (
            <p key={index} className="mb-2 last:mb-0">
              {lines[0]}
            </p>
          );
        } else {
          // Если в абзаце несколько строк, отображаем каждую строку как <span> с <br>
          return (
            <p key={index} className="mb-2 last:mb-0">
              {lines.map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          );
        }
      })}
    </>
  );
};

/**
 * Простая версия для замены переносов строк на <br>
 * @param {string} text - Исходный текст
 * @returns {JSX.Element} - Текст с замененными переносами строк
 */
export const formatTextSimple = (text) => {
  if (!text) return null;

  // Заменяем все переносы строк на <br>
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
};
