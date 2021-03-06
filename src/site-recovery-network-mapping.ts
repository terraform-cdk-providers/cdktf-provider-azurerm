// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRecoveryNetworkMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#name SiteRecoveryNetworkMapping#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#recovery_vault_name SiteRecoveryNetworkMapping#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#resource_group_name SiteRecoveryNetworkMapping#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#source_network_id SiteRecoveryNetworkMapping#source_network_id}
  */
  readonly sourceNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#source_recovery_fabric_name SiteRecoveryNetworkMapping#source_recovery_fabric_name}
  */
  readonly sourceRecoveryFabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#target_network_id SiteRecoveryNetworkMapping#target_network_id}
  */
  readonly targetNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#target_recovery_fabric_name SiteRecoveryNetworkMapping#target_recovery_fabric_name}
  */
  readonly targetRecoveryFabricName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#timeouts SiteRecoveryNetworkMapping#timeouts}
  */
  readonly timeouts?: SiteRecoveryNetworkMappingTimeouts;
}
export interface SiteRecoveryNetworkMappingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#create SiteRecoveryNetworkMapping#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#delete SiteRecoveryNetworkMapping#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#read SiteRecoveryNetworkMapping#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html#update SiteRecoveryNetworkMapping#update}
  */
  readonly update?: string;
}

function siteRecoveryNetworkMappingTimeoutsToTerraform(struct?: SiteRecoveryNetworkMappingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html azurerm_site_recovery_network_mapping}
*/
export class SiteRecoveryNetworkMapping extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_network_mapping.html azurerm_site_recovery_network_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryNetworkMappingConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryNetworkMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_network_mapping',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceNetworkId = config.sourceNetworkId;
    this._sourceRecoveryFabricName = config.sourceRecoveryFabricName;
    this._targetNetworkId = config.targetNetworkId;
    this._targetRecoveryFabricName = config.targetRecoveryFabricName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this.getStringAttribute('recovery_vault_name');
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultNameInput() {
    return this._recoveryVaultName
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

  // source_network_id - computed: false, optional: false, required: true
  private _sourceNetworkId: string;
  public get sourceNetworkId() {
    return this.getStringAttribute('source_network_id');
  }
  public set sourceNetworkId(value: string) {
    this._sourceNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkIdInput() {
    return this._sourceNetworkId
  }

  // source_recovery_fabric_name - computed: false, optional: false, required: true
  private _sourceRecoveryFabricName: string;
  public get sourceRecoveryFabricName() {
    return this.getStringAttribute('source_recovery_fabric_name');
  }
  public set sourceRecoveryFabricName(value: string) {
    this._sourceRecoveryFabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRecoveryFabricNameInput() {
    return this._sourceRecoveryFabricName
  }

  // target_network_id - computed: false, optional: false, required: true
  private _targetNetworkId: string;
  public get targetNetworkId() {
    return this.getStringAttribute('target_network_id');
  }
  public set targetNetworkId(value: string) {
    this._targetNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkIdInput() {
    return this._targetNetworkId
  }

  // target_recovery_fabric_name - computed: false, optional: false, required: true
  private _targetRecoveryFabricName: string;
  public get targetRecoveryFabricName() {
    return this.getStringAttribute('target_recovery_fabric_name');
  }
  public set targetRecoveryFabricName(value: string) {
    this._targetRecoveryFabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRecoveryFabricNameInput() {
    return this._targetRecoveryFabricName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SiteRecoveryNetworkMappingTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SiteRecoveryNetworkMappingTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_network_id: cdktf.stringToTerraform(this._sourceNetworkId),
      source_recovery_fabric_name: cdktf.stringToTerraform(this._sourceRecoveryFabricName),
      target_network_id: cdktf.stringToTerraform(this._targetNetworkId),
      target_recovery_fabric_name: cdktf.stringToTerraform(this._targetRecoveryFabricName),
      timeouts: siteRecoveryNetworkMappingTimeoutsToTerraform(this._timeouts),
    };
  }
}
