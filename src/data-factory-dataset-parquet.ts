// https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryDatasetParquetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#additional_properties DataFactoryDatasetParquet#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#annotations DataFactoryDatasetParquet#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#compression_codec DataFactoryDatasetParquet#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#compression_level DataFactoryDatasetParquet#compression_level}
  */
  readonly compressionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#data_factory_name DataFactoryDatasetParquet#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#description DataFactoryDatasetParquet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#folder DataFactoryDatasetParquet#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#linked_service_name DataFactoryDatasetParquet#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#name DataFactoryDatasetParquet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#parameters DataFactoryDatasetParquet#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#resource_group_name DataFactoryDatasetParquet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * azure_blob_storage_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#azure_blob_storage_location DataFactoryDatasetParquet#azure_blob_storage_location}
  */
  readonly azureBlobStorageLocation?: DataFactoryDatasetParquetAzureBlobStorageLocation[];
  /**
  * http_server_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#http_server_location DataFactoryDatasetParquet#http_server_location}
  */
  readonly httpServerLocation?: DataFactoryDatasetParquetHttpServerLocation[];
  /**
  * schema_column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#schema_column DataFactoryDatasetParquet#schema_column}
  */
  readonly schemaColumn?: DataFactoryDatasetParquetSchemaColumn[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#timeouts DataFactoryDatasetParquet#timeouts}
  */
  readonly timeouts?: DataFactoryDatasetParquetTimeouts;
}
export interface DataFactoryDatasetParquetAzureBlobStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#container DataFactoryDatasetParquet#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#filename DataFactoryDatasetParquet#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#path DataFactoryDatasetParquet#path}
  */
  readonly path: string;
}

function dataFactoryDatasetParquetAzureBlobStorageLocationToTerraform(struct?: DataFactoryDatasetParquetAzureBlobStorageLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DataFactoryDatasetParquetHttpServerLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#filename DataFactoryDatasetParquet#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#path DataFactoryDatasetParquet#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#relative_url DataFactoryDatasetParquet#relative_url}
  */
  readonly relativeUrl: string;
}

function dataFactoryDatasetParquetHttpServerLocationToTerraform(struct?: DataFactoryDatasetParquetHttpServerLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
    relative_url: cdktf.stringToTerraform(struct!.relativeUrl),
  }
}

export interface DataFactoryDatasetParquetSchemaColumn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#description DataFactoryDatasetParquet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#name DataFactoryDatasetParquet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#type DataFactoryDatasetParquet#type}
  */
  readonly type?: string;
}

function dataFactoryDatasetParquetSchemaColumnToTerraform(struct?: DataFactoryDatasetParquetSchemaColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataFactoryDatasetParquetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#create DataFactoryDatasetParquet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#delete DataFactoryDatasetParquet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#read DataFactoryDatasetParquet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html#update DataFactoryDatasetParquet#update}
  */
  readonly update?: string;
}

function dataFactoryDatasetParquetTimeoutsToTerraform(struct?: DataFactoryDatasetParquetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html azurerm_data_factory_dataset_parquet}
*/
export class DataFactoryDatasetParquet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_parquet.html azurerm_data_factory_dataset_parquet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryDatasetParquetConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryDatasetParquetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_parquet',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._compressionCodec = config.compressionCodec;
    this._compressionLevel = config.compressionLevel;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._folder = config.folder;
    this._linkedServiceName = config.linkedServiceName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._azureBlobStorageLocation = config.azureBlobStorageLocation;
    this._httpServerLocation = config.httpServerLocation;
    this._schemaColumn = config.schemaColumn;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string };
  public get additionalProperties() {
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } ) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[];
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] ) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string;
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string ) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec
  }

  // compression_level - computed: false, optional: true, required: false
  private _compressionLevel?: string;
  public get compressionLevel() {
    return this.getStringAttribute('compression_level');
  }
  public set compressionLevel(value: string ) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string;
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string ) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName: string;
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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

  // azure_blob_storage_location - computed: false, optional: true, required: false
  private _azureBlobStorageLocation?: DataFactoryDatasetParquetAzureBlobStorageLocation[];
  public get azureBlobStorageLocation() {
    return this.interpolationForAttribute('azure_blob_storage_location') as any;
  }
  public set azureBlobStorageLocation(value: DataFactoryDatasetParquetAzureBlobStorageLocation[] ) {
    this._azureBlobStorageLocation = value;
  }
  public resetAzureBlobStorageLocation() {
    this._azureBlobStorageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageLocationInput() {
    return this._azureBlobStorageLocation
  }

  // http_server_location - computed: false, optional: true, required: false
  private _httpServerLocation?: DataFactoryDatasetParquetHttpServerLocation[];
  public get httpServerLocation() {
    return this.interpolationForAttribute('http_server_location') as any;
  }
  public set httpServerLocation(value: DataFactoryDatasetParquetHttpServerLocation[] ) {
    this._httpServerLocation = value;
  }
  public resetHttpServerLocation() {
    this._httpServerLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerLocationInput() {
    return this._httpServerLocation
  }

  // schema_column - computed: false, optional: true, required: false
  private _schemaColumn?: DataFactoryDatasetParquetSchemaColumn[];
  public get schemaColumn() {
    return this.interpolationForAttribute('schema_column') as any;
  }
  public set schemaColumn(value: DataFactoryDatasetParquetSchemaColumn[] ) {
    this._schemaColumn = value;
  }
  public resetSchemaColumn() {
    this._schemaColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaColumnInput() {
    return this._schemaColumn
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryDatasetParquetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryDatasetParquetTimeouts ) {
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
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      compression_codec: cdktf.stringToTerraform(this._compressionCodec),
      compression_level: cdktf.stringToTerraform(this._compressionLevel),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      folder: cdktf.stringToTerraform(this._folder),
      linked_service_name: cdktf.stringToTerraform(this._linkedServiceName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      azure_blob_storage_location: cdktf.listMapper(dataFactoryDatasetParquetAzureBlobStorageLocationToTerraform)(this._azureBlobStorageLocation),
      http_server_location: cdktf.listMapper(dataFactoryDatasetParquetHttpServerLocationToTerraform)(this._httpServerLocation),
      schema_column: cdktf.listMapper(dataFactoryDatasetParquetSchemaColumnToTerraform)(this._schemaColumn),
      timeouts: dataFactoryDatasetParquetTimeoutsToTerraform(this._timeouts),
    };
  }
}
