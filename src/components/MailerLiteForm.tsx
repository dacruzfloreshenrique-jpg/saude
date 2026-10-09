import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Declara o tipo global do MailerLite
declare global {
  interface Window {
    ml?: (...args: unknown[]) => void;
  }
}

interface MailerLiteFormProps {
  compact?: boolean;
  formId?: string;
}

/**
 * Componente que renderiza o formulário embutido do MailerLite.
 *
 * Usa o formulário universal identificado por `mWqKp9`.
 * O script universal é carregado globalmente no index.html.
 */
export function MailerLiteForm({ compact = false, formId = 'mWqKp9' }: MailerLiteFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Aguarda o script universal do MailerLite estar disponível
    const checkMailerLite = () => {
      if (typeof window.ml === 'function') {
        setIsLoaded(true);
        return true;
      }
      return false;
    };

    if (checkMailerLite()) {
      return;
    }

    // Polling para verificar se o script carregou (máx. 10 segundos)
    const interval = setInterval(() => {
      if (checkMailerLite()) {
        clearInterval(interval);
      }
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (!checkMailerLite()) {
        setHasError(true);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Fallback: formulário manual caso o script do MailerLite falhe ao carregar
  if (hasError) {
    return <FallbackForm compact={compact} />;
  }

  if (!isLoaded) {
    // Skeleton enquanto o formulário do MailerLite carrega
    return (
      <div className={`${compact ? 'max-w-md mx-auto' : 'max-w-lg mx-auto'}`}>
        <div className="flex flex-col sm:flex-row gap-3 animate-pulse">
          <div className="flex-1 h-12 rounded-full bg-beige" />
          <div className="h-12 w-40 rounded-full bg-forest/20" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`mailerlite-form-wrapper ${compact ? 'max-w-md mx-auto' : 'max-w-lg mx-auto'}`}
      ref={containerRef}
    >
      <div className="ml-embedded" data-form={formId} />
    </div>
  );
}

/**
 * Formulário de fallback caso o script do MailerLite falhe ao carregar.
 * Mantém a funcionalidade básica de captura de email.
 */
function FallbackForm({ compact }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="animate-fade-in">
        <p className="text-forest font-medium text-lg mb-2">Your starter plan is on its way! ✨</p>
        <p className="text-charcoal-light text-sm mb-4">Check your inbox in a few minutes.</p>
        <Link
          to="/21-day-plan"
          className="inline-flex items-center gap-2 text-forest font-medium hover:underline"
        >
          While you wait — explore the 21-Day Meal Plan →
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 ${compact ? 'max-w-md mx-auto' : 'max-w-lg mx-auto'}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-5 py-3 rounded-full border border-beige bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors btn-press text-sm whitespace-nowrap"
      >
        GET THE FREE PLAN
      </button>
    </form>
  );
}
