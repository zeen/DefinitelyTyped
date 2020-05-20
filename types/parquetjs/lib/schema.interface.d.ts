export type SchemaInterfaceField = SingleFieldInterface | NestedFieldsInterface;

export interface SchemaInterface {
    [key: string]: SchemaInterfaceField;
}

export interface SingleFieldInterface {
    type: 'BOOLEAN' | 'INT32' | 'INT64' | 'INT96' | 'FLOAT' | 'DOUBLE' | 'BYTE_ARRAY' | 'FIXED_LEN_BYTE_ARRAY' | 'UTF8' | 'TIME_MILLIS' | 'TIME_MICROS' | 'DATE' | 'TIMESTAMP_MILLIS' | 'TIMESTAMP_MICROS' | 'UINT_8' | 'UINT_16' | 'UINT_32' | 'UINT_64' | 'INT_8' | 'INT_16' | 'INT_32' | 'INT_64' | 'JSON' | 'BSON' | 'INTERVAL';
    encoding?: 'PLAIN' | 'RLE';
    compression?: 'UNCOMPRESSED' | 'GZIP' | 'SNAPPY' | 'LZO' | 'BROTLI';
    bitWidth?: number;
    optional?: boolean;
    repeated?: boolean;
}

export interface NestedFieldsInterface {
    optional?: boolean;
    repeated?: boolean;
    fields: SchemaInterface;
}
