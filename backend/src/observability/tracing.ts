import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';

const serviceName = process.env.OTEL_SERVICE_NAME || 'cms-backend';
const exporterEndpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
const exporterHeadersValue = process.env.OTEL_EXPORTER_OTLP_HEADERS;

const parseHeaders = (raw?: string): Record<string, string> | undefined => {
    if (!raw) return undefined;
    return raw.split(',').reduce<Record<string, string>>((acc, part) => {
        const [key, ...rest] = part.split('=');
        if (!key || rest.length === 0) return acc;
        acc[key.trim()] = rest.join('=').trim();
        return acc;
    }, {});
};

const traceExporter = exporterEndpoint
    ? new OTLPTraceExporter({ url: exporterEndpoint, headers: parseHeaders(exporterHeadersValue) })
    : process.env.NODE_ENV === 'production'
      ? undefined
      : new ConsoleSpanExporter();

const sdk = new NodeSDK({
    resource: resourceFromAttributes({
        [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    }),
    traceExporter,
    instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

const shutdown = async () => {
    try {
        await sdk.shutdown();
    } catch {
        // ignore shutdown errors
    }
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
