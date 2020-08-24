// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SiteRecoveryProtectionContainerConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly recoveryFabricName: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: SiteRecoveryProtectionContainerTimeouts;
}
export interface SiteRecoveryProtectionContainerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SiteRecoveryProtectionContainer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SiteRecoveryProtectionContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_protection_container',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._recoveryFabricName = config.recoveryFabricName;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // recovery_fabric_name - computed: false, optional: false, required: true
  private _recoveryFabricName: string;
  public get recoveryFabricName() {
    return this._recoveryFabricName;
  }
  public set recoveryFabricName(value: string) {
    this._recoveryFabricName = value;
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this._recoveryVaultName;
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SiteRecoveryProtectionContainerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SiteRecoveryProtectionContainerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      recovery_fabric_name: this._recoveryFabricName,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
