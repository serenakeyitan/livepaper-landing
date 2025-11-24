// 声明 gtag 全局函数类型
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js' | string,
      targetId: string | Date,
      config?: {
        event_callback?: () => void;
        event_timeout?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

// Helper function to delay opening a URL until a gtag event is sent.
// Call it in response to an action that should navigate to a URL.
export function gtagSendEvent(url: string): boolean {
  const callback = function () {
    if (typeof url === 'string') {
      window.location.href = url;
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion_event_submit_lead_form', {
      'event_callback': callback,
      'event_timeout': 2000,
      // <event_parameters>
    });
  } else {
    // 如果 gtag 未加载，直接跳转
    window.location.href = url;
  }

  return false;
}

