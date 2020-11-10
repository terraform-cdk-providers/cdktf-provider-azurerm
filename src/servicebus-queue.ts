// https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServicebusQueueConfig extends TerraformMetaArguments {
  readonly autoDeleteOnIdle?: string;
  readonly deadLetteringOnMessageExpiration?: boolean;
  readonly defaultMessageTtl?: string;
  readonly duplicateDetectionHistoryTimeWindow?: string;
  readonly enableExpress?: boolean;
  readonly enablePartitioning?: boolean;
  readonly lockDuration?: string;
  readonly maxDeliveryCount?: number;
  readonly maxSizeInMegabytes?: number;
  readonly name: string;
  readonly namespaceName: string;
  readonly requiresDuplicateDetection?: boolean;
  readonly requiresSession?: boolean;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ServicebusQueueTimeouts;
}
export interface ServicebusQueueTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ServicebusQueue extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicebusQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_queue',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoDeleteOnIdle = config.autoDeleteOnIdle;
    this._deadLetteringOnMessageExpiration = config.deadLetteringOnMessageExpiration;
    this._defaultMessageTtl = config.defaultMessageTtl;
    this._duplicateDetectionHistoryTimeWindow = config.duplicateDetectionHistoryTimeWindow;
    this._enableExpress = config.enableExpress;
    this._enablePartitioning = config.enablePartitioning;
    this._lockDuration = config.lockDuration;
    this._maxDeliveryCount = config.maxDeliveryCount;
    this._maxSizeInMegabytes = config.maxSizeInMegabytes;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._requiresDuplicateDetection = config.requiresDuplicateDetection;
    this._requiresSession = config.requiresSession;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_on_idle - computed: true, optional: true, required: false
  private _autoDeleteOnIdle?: string;
  public get autoDeleteOnIdle() {
    return this.getStringAttribute('auto_delete_on_idle');
  }
  public set autoDeleteOnIdle(value: string) {
    this._autoDeleteOnIdle = value;
  }
  public resetAutoDeleteOnIdle() {
    this._autoDeleteOnIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteOnIdleInput() {
    return this._autoDeleteOnIdle
  }

  // dead_lettering_on_message_expiration - computed: false, optional: true, required: false
  private _deadLetteringOnMessageExpiration?: boolean;
  public get deadLetteringOnMessageExpiration() {
    return this.getBooleanAttribute('dead_lettering_on_message_expiration');
  }
  public set deadLetteringOnMessageExpiration(value: boolean ) {
    this._deadLetteringOnMessageExpiration = value;
  }
  public resetDeadLetteringOnMessageExpiration() {
    this._deadLetteringOnMessageExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetteringOnMessageExpirationInput() {
    return this._deadLetteringOnMessageExpiration
  }

  // default_message_ttl - computed: true, optional: true, required: false
  private _defaultMessageTtl?: string;
  public get defaultMessageTtl() {
    return this.getStringAttribute('default_message_ttl');
  }
  public set defaultMessageTtl(value: string) {
    this._defaultMessageTtl = value;
  }
  public resetDefaultMessageTtl() {
    this._defaultMessageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMessageTtlInput() {
    return this._defaultMessageTtl
  }

  // duplicate_detection_history_time_window - computed: true, optional: true, required: false
  private _duplicateDetectionHistoryTimeWindow?: string;
  public get duplicateDetectionHistoryTimeWindow() {
    return this.getStringAttribute('duplicate_detection_history_time_window');
  }
  public set duplicateDetectionHistoryTimeWindow(value: string) {
    this._duplicateDetectionHistoryTimeWindow = value;
  }
  public resetDuplicateDetectionHistoryTimeWindow() {
    this._duplicateDetectionHistoryTimeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateDetectionHistoryTimeWindowInput() {
    return this._duplicateDetectionHistoryTimeWindow
  }

  // enable_express - computed: false, optional: true, required: false
  private _enableExpress?: boolean;
  public get enableExpress() {
    return this.getBooleanAttribute('enable_express');
  }
  public set enableExpress(value: boolean ) {
    this._enableExpress = value;
  }
  public resetEnableExpress() {
    this._enableExpress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExpressInput() {
    return this._enableExpress
  }

  // enable_partitioning - computed: false, optional: true, required: false
  private _enablePartitioning?: boolean;
  public get enablePartitioning() {
    return this.getBooleanAttribute('enable_partitioning');
  }
  public set enablePartitioning(value: boolean ) {
    this._enablePartitioning = value;
  }
  public resetEnablePartitioning() {
    this._enablePartitioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePartitioningInput() {
    return this._enablePartitioning
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_duration - computed: true, optional: true, required: false
  private _lockDuration?: string;
  public get lockDuration() {
    return this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string) {
    this._lockDuration = value;
  }
  public resetLockDuration() {
    this._lockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDurationInput() {
    return this._lockDuration
  }

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number;
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number ) {
    this._maxDeliveryCount = value;
  }
  public resetMaxDeliveryCount() {
    this._maxDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount
  }

  // max_size_in_megabytes - computed: true, optional: true, required: false
  private _maxSizeInMegabytes?: number;
  public get maxSizeInMegabytes() {
    return this.getNumberAttribute('max_size_in_megabytes');
  }
  public set maxSizeInMegabytes(value: number) {
    this._maxSizeInMegabytes = value;
  }
  public resetMaxSizeInMegabytes() {
    this._maxSizeInMegabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInMegabytesInput() {
    return this._maxSizeInMegabytes
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // requires_duplicate_detection - computed: false, optional: true, required: false
  private _requiresDuplicateDetection?: boolean;
  public get requiresDuplicateDetection() {
    return this.getBooleanAttribute('requires_duplicate_detection');
  }
  public set requiresDuplicateDetection(value: boolean ) {
    this._requiresDuplicateDetection = value;
  }
  public resetRequiresDuplicateDetection() {
    this._requiresDuplicateDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresDuplicateDetectionInput() {
    return this._requiresDuplicateDetection
  }

  // requires_session - computed: false, optional: true, required: false
  private _requiresSession?: boolean;
  public get requiresSession() {
    return this.getBooleanAttribute('requires_session');
  }
  public set requiresSession(value: boolean ) {
    this._requiresSession = value;
  }
  public resetRequiresSession() {
    this._requiresSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresSessionInput() {
    return this._requiresSession
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusQueueTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServicebusQueueTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_delete_on_idle: this._autoDeleteOnIdle,
      dead_lettering_on_message_expiration: this._deadLetteringOnMessageExpiration,
      default_message_ttl: this._defaultMessageTtl,
      duplicate_detection_history_time_window: this._duplicateDetectionHistoryTimeWindow,
      enable_express: this._enableExpress,
      enable_partitioning: this._enablePartitioning,
      lock_duration: this._lockDuration,
      max_delivery_count: this._maxDeliveryCount,
      max_size_in_megabytes: this._maxSizeInMegabytes,
      name: this._name,
      namespace_name: this._namespaceName,
      requires_duplicate_detection: this._requiresDuplicateDetection,
      requires_session: this._requiresSession,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
