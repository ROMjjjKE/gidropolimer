import { useId, useState } from 'react';

const OWNERS = ['Закрытый паркинг', 'Ливневая канализация / КНС', 'Трубопровод (засор, ил, песок)', 'Двор, проезд, территория'];

type Errors = { name?: string; phone?: string; owner?: string };

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const id = useId();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [owner, setOwner] = useState('');
  const [height, setHeight] = useState('');
  const [dia, setDia] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = 'Как к вам обращаться?';
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 9) e.phone = 'Нужен номер, чтобы перезвонить: минимум 9 цифр.';
    if (!owner) e.owner = 'Выберите тип объекта.';
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const lines = [
      'Заявка с сайта gidropolimer',
      `Имя: ${name.trim()}`,
      `Телефон: ${phone.trim()}`,
      `Объект: ${owner}`,
      height ? `Высота перекрытия: ${height} м` : null,
      dia ? `Диаметр трубы: ${dia} мм` : null,
      comment.trim() ? `Комментарий: ${comment.trim()}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/375447427447?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="request">
        <div className="note-ok">
          <p style={{ marginBottom: 8 }}>
            <strong>Текст заявки готов и открыт в WhatsApp.</strong> Осталось отправить его в чат — ответим
            с параметрами сметы.
          </p>
          <p className="form-small">
            WhatsApp не открылся? Позвоните: <a href="tel:+375447427447" style={{ borderBottom: '1px solid currentColor' }}>+375 44 742-74-47</a>
          </p>
        </div>
        <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>
          Заполнить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form className="request" onSubmit={onSubmit} noValidate>
      <div className="field--half">
        <div>
          <label htmlFor={`${id}-name`}>Имя</label>
          <input
            id={`${id}-name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Как вас зовут"
            autoComplete="name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="err">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor={`${id}-phone`}>Телефон</label>
          <input
            id={`${id}-phone`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+375 __ ___ __ __"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <span className="err">{errors.phone}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${id}-owner`}>Объект</label>
        <select id={`${id}-owner`} value={owner} onChange={(e) => setOwner(e.target.value)} aria-invalid={!!errors.owner}>
          <option value="">Выберите тип объекта</option>
          {OWNERS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {errors.owner && <span className="err">{errors.owner}</span>}
      </div>

      <div className="field--half">
        <div>
          <label htmlFor={`${id}-h`}>Высота перекрытия, м</label>
          <input id={`${id}-h`} value={height} onChange={(e) => setHeight(e.target.value)} placeholder="2,4" inputMode="decimal" />
        </div>
        <div>
          <label htmlFor={`${id}-d`}>Диаметр трубы, мм</label>
          <input id={`${id}-d`} value={dia} onChange={(e) => setDia(e.target.value)} placeholder="110–300" inputMode="numeric" />
        </div>
      </div>

      {!compact && (
        <div className="field">
          <label htmlFor={`${id}-c`}>Что происходит на объекте</label>
          <textarea
            id={`${id}-c`}
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Например: ливнёвка в паркинге −2, вода стоит у трапа, метраж около 40 м"
          />
        </div>
      )}

      <div className="form-foot">
        <button type="submit" className="btn btn--wide">Отправить заявку в WhatsApp</button>
        <p className="form-small">
          Заявка уходит в WhatsApp с уже заполненными параметрами — вы видите текст до отправки. Или позвоните
          напрямую: <a href="tel:+375447427447" style={{ borderBottom: '1px solid currentColor' }}>+375 44 742-74-47</a>.
        </p>
      </div>
    </form>
  );
}
