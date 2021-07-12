// https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheBlobNfsTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#access_policy_name HpcCacheBlobNfsTarget#access_policy_name}
  */
  readonly accessPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#cache_name HpcCacheBlobNfsTarget#cache_name}
  */
  readonly cacheName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#name HpcCacheBlobNfsTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#namespace_path HpcCacheBlobNfsTarget#namespace_path}
  */
  readonly namespacePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#resource_group_name HpcCacheBlobNfsTarget#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#storage_container_id HpcCacheBlobNfsTarget#storage_container_id}
  */
  readonly storageContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#usage_model HpcCacheBlobNfsTarget#usage_model}
  */
  readonly usageModel: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#timeouts HpcCacheBlobNfsTarget#timeouts}
  */
  readonly timeouts?: HpcCacheBlobNfsTargetTimeouts;
}
export interface HpcCacheBlobNfsTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#create HpcCacheBlobNfsTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#delete HpcCacheBlobNfsTarget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#read HpcCacheBlobNfsTarget#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html#update HpcCacheBlobNfsTarget#update}
  */
  readonly update?: string;
}

function hpcCacheBlobNfsTargetTimeoutsToTerraform(struct?: HpcCacheBlobNfsTargetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html azurerm_hpc_cache_blob_nfs_target}
*/
export class HpcCacheBlobNfsTarget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_blob_nfs_target.html azurerm_hpc_cache_blob_nfs_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HpcCacheBlobNfsTargetConfig
  */
  public constructor(scope: Construct, id: string, config: HpcCacheBlobNfsTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache_blob_nfs_target',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicyName = config.accessPolicyName;
    this._cacheName = config.cacheName;
    this._name = config.name;
    this._namespacePath = config.namespacePath;
    this._resourceGroupName = config.resourceGroupName;
    this._storageContainerId = config.storageContainerId;
    this._usageModel = config.usageModel;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_name - computed: false, optional: true, required: false
  private _accessPolicyName?: string;
  public get accessPolicyName() {
    return this.getStringAttribute('access_policy_name');
  }
  public set accessPolicyName(value: string ) {
    this._accessPolicyName = value;
  }
  public resetAccessPolicyName() {
    this._accessPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyNameInput() {
    return this._accessPolicyName
  }

  // cache_name - computed: false, optional: false, required: true
  private _cacheName: string;
  public get cacheName() {
    return this.getStringAttribute('cache_name');
  }
  public set cacheName(value: string) {
    this._cacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNameInput() {
    return this._cacheName
  }

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

  // namespace_path - computed: false, optional: false, required: true
  private _namespacePath: string;
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }
  public set namespacePath(value: string) {
    this._namespacePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacePathInput() {
    return this._namespacePath
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

  // storage_container_id - computed: false, optional: false, required: true
  private _storageContainerId: string;
  public get storageContainerId() {
    return this.getStringAttribute('storage_container_id');
  }
  public set storageContainerId(value: string) {
    this._storageContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerIdInput() {
    return this._storageContainerId
  }

  // usage_model - computed: false, optional: false, required: true
  private _usageModel: string;
  public get usageModel() {
    return this.getStringAttribute('usage_model');
  }
  public set usageModel(value: string) {
    this._usageModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageModelInput() {
    return this._usageModel
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HpcCacheBlobNfsTargetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HpcCacheBlobNfsTargetTimeouts ) {
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
      access_policy_name: cdktf.stringToTerraform(this._accessPolicyName),
      cache_name: cdktf.stringToTerraform(this._cacheName),
      name: cdktf.stringToTerraform(this._name),
      namespace_path: cdktf.stringToTerraform(this._namespacePath),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_container_id: cdktf.stringToTerraform(this._storageContainerId),
      usage_model: cdktf.stringToTerraform(this._usageModel),
      timeouts: hpcCacheBlobNfsTargetTimeoutsToTerraform(this._timeouts),
    };
  }
}
