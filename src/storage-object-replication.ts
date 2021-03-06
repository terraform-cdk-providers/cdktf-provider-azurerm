// https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageObjectReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#destination_storage_account_id StorageObjectReplication#destination_storage_account_id}
  */
  readonly destinationStorageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#source_storage_account_id StorageObjectReplication#source_storage_account_id}
  */
  readonly sourceStorageAccountId: string;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#rules StorageObjectReplication#rules}
  */
  readonly rules: StorageObjectReplicationRules[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#timeouts StorageObjectReplication#timeouts}
  */
  readonly timeouts?: StorageObjectReplicationTimeouts;
}
export interface StorageObjectReplicationRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#copy_blobs_created_after StorageObjectReplication#copy_blobs_created_after}
  */
  readonly copyBlobsCreatedAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#destination_container_name StorageObjectReplication#destination_container_name}
  */
  readonly destinationContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#filter_out_blobs_with_prefix StorageObjectReplication#filter_out_blobs_with_prefix}
  */
  readonly filterOutBlobsWithPrefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#source_container_name StorageObjectReplication#source_container_name}
  */
  readonly sourceContainerName: string;
}

function storageObjectReplicationRulesToTerraform(struct?: StorageObjectReplicationRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    copy_blobs_created_after: cdktf.stringToTerraform(struct!.copyBlobsCreatedAfter),
    destination_container_name: cdktf.stringToTerraform(struct!.destinationContainerName),
    filter_out_blobs_with_prefix: cdktf.listMapper(cdktf.stringToTerraform)(struct!.filterOutBlobsWithPrefix),
    source_container_name: cdktf.stringToTerraform(struct!.sourceContainerName),
  }
}

export interface StorageObjectReplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#create StorageObjectReplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#delete StorageObjectReplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#read StorageObjectReplication#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html#update StorageObjectReplication#update}
  */
  readonly update?: string;
}

function storageObjectReplicationTimeoutsToTerraform(struct?: StorageObjectReplicationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html azurerm_storage_object_replication}
*/
export class StorageObjectReplication extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication.html azurerm_storage_object_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageObjectReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: StorageObjectReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_object_replication',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationStorageAccountId = config.destinationStorageAccountId;
    this._sourceStorageAccountId = config.sourceStorageAccountId;
    this._rules = config.rules;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_object_replication_id - computed: true, optional: false, required: false
  public get destinationObjectReplicationId() {
    return this.getStringAttribute('destination_object_replication_id');
  }

  // destination_storage_account_id - computed: false, optional: false, required: true
  private _destinationStorageAccountId: string;
  public get destinationStorageAccountId() {
    return this.getStringAttribute('destination_storage_account_id');
  }
  public set destinationStorageAccountId(value: string) {
    this._destinationStorageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationStorageAccountIdInput() {
    return this._destinationStorageAccountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_object_replication_id - computed: true, optional: false, required: false
  public get sourceObjectReplicationId() {
    return this.getStringAttribute('source_object_replication_id');
  }

  // source_storage_account_id - computed: false, optional: false, required: true
  private _sourceStorageAccountId: string;
  public get sourceStorageAccountId() {
    return this.getStringAttribute('source_storage_account_id');
  }
  public set sourceStorageAccountId(value: string) {
    this._sourceStorageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStorageAccountIdInput() {
    return this._sourceStorageAccountId
  }

  // rules - computed: false, optional: false, required: true
  private _rules: StorageObjectReplicationRules[];
  public get rules() {
    return this.interpolationForAttribute('rules') as any;
  }
  public set rules(value: StorageObjectReplicationRules[]) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageObjectReplicationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageObjectReplicationTimeouts ) {
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
      destination_storage_account_id: cdktf.stringToTerraform(this._destinationStorageAccountId),
      source_storage_account_id: cdktf.stringToTerraform(this._sourceStorageAccountId),
      rules: cdktf.listMapper(storageObjectReplicationRulesToTerraform)(this._rules),
      timeouts: storageObjectReplicationTimeoutsToTerraform(this._timeouts),
    };
  }
}
