// https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageManagementPolicyConfig extends TerraformMetaArguments {
  readonly storageAccountId: string;
  /** rule block */
  readonly rule?: StorageManagementPolicyRule[];
  /** timeouts block */
  readonly timeouts?: StorageManagementPolicyTimeouts;
}
export interface StorageManagementPolicyRuleActionsBaseBlob {
  readonly deleteAfterDaysSinceModificationGreaterThan?: number;
  readonly tierToArchiveAfterDaysSinceModificationGreaterThan?: number;
  readonly tierToCoolAfterDaysSinceModificationGreaterThan?: number;
}
export interface StorageManagementPolicyRuleActionsSnapshot {
  readonly deleteAfterDaysSinceCreationGreaterThan?: number;
}
export interface StorageManagementPolicyRuleActions {
  /** base_blob block */
  readonly baseBlob?: StorageManagementPolicyRuleActionsBaseBlob[];
  /** snapshot block */
  readonly snapshot?: StorageManagementPolicyRuleActionsSnapshot[];
}
export interface StorageManagementPolicyRuleFilters {
  readonly blobTypes?: string[];
  readonly prefixMatch?: string[];
}
export interface StorageManagementPolicyRule {
  readonly enabled: boolean;
  readonly name: string;
  /** actions block */
  readonly actions: StorageManagementPolicyRuleActions[];
  /** filters block */
  readonly filters?: StorageManagementPolicyRuleFilters[];
}
export interface StorageManagementPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StorageManagementPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageManagementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_management_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._storageAccountId = config.storageAccountId;
    this._rule = config.rule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: StorageManagementPolicyRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: StorageManagementPolicyRule[] ) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageManagementPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageManagementPolicyTimeouts ) {
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
      storage_account_id: this._storageAccountId,
      rule: this._rule,
      timeouts: this._timeouts,
    };
  }
}
