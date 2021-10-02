import { performance } from "perf_hooks";

export function Timer() {
  return (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const start = performance.now();
      const result = await original.apply(this, args);
      const end = performance.now();

      const duration = (end - start).toFixed(2).toString() + "ms";

      return {
        ...result,
        duration,
      };
    };

    return descriptor;
  };
}
