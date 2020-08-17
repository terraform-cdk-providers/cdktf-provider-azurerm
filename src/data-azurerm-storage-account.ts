// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_storage_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermStorageAccountConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermStorageAccountTimeouts;
}
export class DataAzurermStorageAccountCustomDomain extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAzurermStorageAccountTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermStorageAccount extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermStorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_tier - computed: true, optional: false, required: true
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }

  // account_kind - computed: true, optional: false, required: true
  public get accountKind() {
    return this.getStringAttribute('account_kind');
  }

  // account_replication_type - computed: true, optional: false, required: true
  public get accountReplicationType() {
    return this.getStringAttribute('account_replication_type');
  }

  // account_tier - computed: true, optional: false, required: true
  public get accountTier() {
    return this.getStringAttribute('account_tier');
  }

  // custom_domain - computed: true, optional: false, required: true
  public customDomain(index: string) {
    return new DataAzurermStorageAccountCustomDomain(this, 'custom_domain', index);
  }

  // enable_https_traffic_only - computed: true, optional: false, required: true
  public get enableHttpsTrafficOnly() {
    return this.getBooleanAttribute('enable_https_traffic_only');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_hns_enabled - computed: true, optional: false, required: true
  public get isHnsEnabled() {
    return this.getBooleanAttribute('is_hns_enabled');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // primary_access_key - computed: true, optional: false, required: true
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_blob_connection_string - computed: true, optional: false, required: true
  public get primaryBlobConnectionString() {
    return this.getStringAttribute('primary_blob_connection_string');
  }

  // primary_blob_endpoint - computed: true, optional: false, required: true
  public get primaryBlobEndpoint() {
    return this.getStringAttribute('primary_blob_endpoint');
  }

  // primary_blob_host - computed: true, optional: false, required: true
  public get primaryBlobHost() {
    return this.getStringAttribute('primary_blob_host');
  }

  // primary_connection_string - computed: true, optional: false, required: true
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_dfs_endpoint - computed: true, optional: false, required: true
  public get primaryDfsEndpoint() {
    return this.getStringAttribute('primary_dfs_endpoint');
  }

  // primary_dfs_host - computed: true, optional: false, required: true
  public get primaryDfsHost() {
    return this.getStringAttribute('primary_dfs_host');
  }

  // primary_file_endpoint - computed: true, optional: false, required: true
  public get primaryFileEndpoint() {
    return this.getStringAttribute('primary_file_endpoint');
  }

  // primary_file_host - computed: true, optional: false, required: true
  public get primaryFileHost() {
    return this.getStringAttribute('primary_file_host');
  }

  // primary_location - computed: true, optional: false, required: true
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
  }

  // primary_queue_endpoint - computed: true, optional: false, required: true
  public get primaryQueueEndpoint() {
    return this.getStringAttribute('primary_queue_endpoint');
  }

  // primary_queue_host - computed: true, optional: false, required: true
  public get primaryQueueHost() {
    return this.getStringAttribute('primary_queue_host');
  }

  // primary_table_endpoint - computed: true, optional: false, required: true
  public get primaryTableEndpoint() {
    return this.getStringAttribute('primary_table_endpoint');
  }

  // primary_table_host - computed: true, optional: false, required: true
  public get primaryTableHost() {
    return this.getStringAttribute('primary_table_host');
  }

  // primary_web_endpoint - computed: true, optional: false, required: true
  public get primaryWebEndpoint() {
    return this.getStringAttribute('primary_web_endpoint');
  }

  // primary_web_host - computed: true, optional: false, required: true
  public get primaryWebHost() {
    return this.getStringAttribute('primary_web_host');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_access_key - computed: true, optional: false, required: true
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_blob_connection_string - computed: true, optional: false, required: true
  public get secondaryBlobConnectionString() {
    return this.getStringAttribute('secondary_blob_connection_string');
  }

  // secondary_blob_endpoint - computed: true, optional: false, required: true
  public get secondaryBlobEndpoint() {
    return this.getStringAttribute('secondary_blob_endpoint');
  }

  // secondary_blob_host - computed: true, optional: false, required: true
  public get secondaryBlobHost() {
    return this.getStringAttribute('secondary_blob_host');
  }

  // secondary_connection_string - computed: true, optional: false, required: true
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_dfs_endpoint - computed: true, optional: false, required: true
  public get secondaryDfsEndpoint() {
    return this.getStringAttribute('secondary_dfs_endpoint');
  }

  // secondary_dfs_host - computed: true, optional: false, required: true
  public get secondaryDfsHost() {
    return this.getStringAttribute('secondary_dfs_host');
  }

  // secondary_file_endpoint - computed: true, optional: false, required: true
  public get secondaryFileEndpoint() {
    return this.getStringAttribute('secondary_file_endpoint');
  }

  // secondary_file_host - computed: true, optional: false, required: true
  public get secondaryFileHost() {
    return this.getStringAttribute('secondary_file_host');
  }

  // secondary_location - computed: true, optional: false, required: true
  public get secondaryLocation() {
    return this.getStringAttribute('secondary_location');
  }

  // secondary_queue_endpoint - computed: true, optional: false, required: true
  public get secondaryQueueEndpoint() {
    return this.getStringAttribute('secondary_queue_endpoint');
  }

  // secondary_queue_host - computed: true, optional: false, required: true
  public get secondaryQueueHost() {
    return this.getStringAttribute('secondary_queue_host');
  }

  // secondary_table_endpoint - computed: true, optional: false, required: true
  public get secondaryTableEndpoint() {
    return this.getStringAttribute('secondary_table_endpoint');
  }

  // secondary_table_host - computed: true, optional: false, required: true
  public get secondaryTableHost() {
    return this.getStringAttribute('secondary_table_host');
  }

  // secondary_web_endpoint - computed: true, optional: false, required: true
  public get secondaryWebEndpoint() {
    return this.getStringAttribute('secondary_web_endpoint');
  }

  // secondary_web_host - computed: true, optional: false, required: true
  public get secondaryWebHost() {
    return this.getStringAttribute('secondary_web_host');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermStorageAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
