import { Common, Query, ReplicatorBase } from './couchbase-plugin.common';

export {
    Query, QueryMeta, QueryArrayOperator, QueryComparisonOperator, QueryLogicalOperator, QueryOrderItem, QueryWhereItem
}from './couchbase-plugin.common';

export declare class Couchbase extends Common {
    config: any;
    android: any;
    ios: any;

    constructor(name: string);

    createDocument(data: Object, documentId?: string): any;

    getDocument(documentId: string): any;

    updateDocument(documentId: string, data: any): void;

    deleteDocument(documentId: string): any;

    destroyDatabase(): void;

    query(query?: Query): any[];

    createPullReplication(remoteUrl: string, username?: string, password?: string): Replicator;

    createPushReplication(remoteUrl: string, username?: string, password?: string): Replicator;

    addDatabaseChangeListener(callback: any): void;
}

export declare class Replicator extends ReplicatorBase {
    constructor(replicator: any);

    start(): void;

    stop(): void;

    isRunning(): boolean;

    setContinuous(isContinuous: boolean): void;
}
