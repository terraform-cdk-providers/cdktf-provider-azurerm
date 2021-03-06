// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRecoveryProtectionContainerMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#name SiteRecoveryProtectionContainerMapping#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}
  */
  readonly recoveryFabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}
  */
  readonly recoveryReplicationPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}
  */
  readonly recoverySourceProtectionContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}
  */
  readonly recoveryTargetProtectionContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#timeouts SiteRecoveryProtectionContainerMapping#timeouts}
  */
  readonly timeouts?: SiteRecoveryProtectionContainerMappingTimeouts;
}
export interface SiteRecoveryProtectionContainerMappingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#create SiteRecoveryProtectionContainerMapping#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#delete SiteRecoveryProtectionContainerMapping#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#read SiteRecoveryProtectionContainerMapping#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html#update SiteRecoveryProtectionContainerMapping#update}
  */
  readonly update?: string;
}

function siteRecoveryProtectionContainerMappingTimeoutsToTerraform(struct?: SiteRecoveryProtectionContainerMappingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html azurerm_site_recovery_protection_container_mapping}
*/
export class SiteRecoveryProtectionContainerMapping extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping.html azurerm_site_recovery_protection_container_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryProtectionContainerMappingConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryProtectionContainerMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_protection_container_mapping',
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
    this._recoveryReplicationPolicyId = config.recoveryReplicationPolicyId;
    this._recoverySourceProtectionContainerName = config.recoverySourceProtectionContainerName;
    this._recoveryTargetProtectionContainerId = config.recoveryTargetProtectionContainerId;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
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

  // recovery_fabric_name - computed: false, optional: false, required: true
  private _recoveryFabricName: string;
  public get recoveryFabricName() {
    return this.getStringAttribute('recovery_fabric_name');
  }
  public set recoveryFabricName(value: string) {
    this._recoveryFabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryFabricNameInput() {
    return this._recoveryFabricName
  }

  // recovery_replication_policy_id - computed: false, optional: false, required: true
  private _recoveryReplicationPolicyId: string;
  public get recoveryReplicationPolicyId() {
    return this.getStringAttribute('recovery_replication_policy_id');
  }
  public set recoveryReplicationPolicyId(value: string) {
    this._recoveryReplicationPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryReplicationPolicyIdInput() {
    return this._recoveryReplicationPolicyId
  }

  // recovery_source_protection_container_name - computed: false, optional: false, required: true
  private _recoverySourceProtectionContainerName: string;
  public get recoverySourceProtectionContainerName() {
    return this.getStringAttribute('recovery_source_protection_container_name');
  }
  public set recoverySourceProtectionContainerName(value: string) {
    this._recoverySourceProtectionContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverySourceProtectionContainerNameInput() {
    return this._recoverySourceProtectionContainerName
  }

  // recovery_target_protection_container_id - computed: false, optional: false, required: true
  private _recoveryTargetProtectionContainerId: string;
  public get recoveryTargetProtectionContainerId() {
    return this.getStringAttribute('recovery_target_protection_container_id');
  }
  public set recoveryTargetProtectionContainerId(value: string) {
    this._recoveryTargetProtectionContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTargetProtectionContainerIdInput() {
    return this._recoveryTargetProtectionContainerId
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SiteRecoveryProtectionContainerMappingTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SiteRecoveryProtectionContainerMappingTimeouts ) {
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
      recovery_fabric_name: cdktf.stringToTerraform(this._recoveryFabricName),
      recovery_replication_policy_id: cdktf.stringToTerraform(this._recoveryReplicationPolicyId),
      recovery_source_protection_container_name: cdktf.stringToTerraform(this._recoverySourceProtectionContainerName),
      recovery_target_protection_container_id: cdktf.stringToTerraform(this._recoveryTargetProtectionContainerId),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: siteRecoveryProtectionContainerMappingTimeoutsToTerraform(this._timeouts),
    };
  }
}
