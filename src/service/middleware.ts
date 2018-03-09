'use strict';

export abstract class MiddlewareService {
    abstract list(middleware: string, filter?: string): Promise<Array<string>>;
    abstract add(middleware: string, name: string, content: Buffer): Promise<string>;
    abstract remove(middleware: string, name: string): Promise<void>;
    abstract update(middleware: string, name: string, content: Buffer, upsert?: boolean): Promise<void>;
    abstract read(middleware: string, name: string): Promise<Buffer>;
}
