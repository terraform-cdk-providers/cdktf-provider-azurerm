// https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryDatasetDelimitedTextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#additional_properties DataFactoryDatasetDelimitedText#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#annotations DataFactoryDatasetDelimitedText#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}
  */
  readonly columnDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#compression_codec DataFactoryDatasetDelimitedText#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#compression_level DataFactoryDatasetDelimitedText#compression_level}
  */
  readonly compressionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#data_factory_name DataFactoryDatasetDelimitedText#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#description DataFactoryDatasetDelimitedText#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#encoding DataFactoryDatasetDelimitedText#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#escape_character DataFactoryDatasetDelimitedText#escape_character}
  */
  readonly escapeCharacter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}
  */
  readonly firstRowAsHeader?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#folder DataFactoryDatasetDelimitedText#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#name DataFactoryDatasetDelimitedText#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#null_value DataFactoryDatasetDelimitedText#null_value}
  */
  readonly nullValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#parameters DataFactoryDatasetDelimitedText#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#quote_character DataFactoryDatasetDelimitedText#quote_character}
  */
  readonly quoteCharacter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#resource_group_name DataFactoryDatasetDelimitedText#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}
  */
  readonly rowDelimiter?: string;
  /**
  * azure_blob_fs_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#azure_blob_fs_location DataFactoryDatasetDelimitedText#azure_blob_fs_location}
  */
  readonly azureBlobFsLocation?: DataFactoryDatasetDelimitedTextAzureBlobFsLocation[];
  /**
  * azure_blob_storage_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#azure_blob_storage_location DataFactoryDatasetDelimitedText#azure_blob_storage_location}
  */
  readonly azureBlobStorageLocation?: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation[];
  /**
  * http_server_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#http_server_location DataFactoryDatasetDelimitedText#http_server_location}
  */
  readonly httpServerLocation?: DataFactoryDatasetDelimitedTextHttpServerLocation[];
  /**
  * schema_column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#schema_column DataFactoryDatasetDelimitedText#schema_column}
  */
  readonly schemaColumn?: DataFactoryDatasetDelimitedTextSchemaColumn[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#timeouts DataFactoryDatasetDelimitedText#timeouts}
  */
  readonly timeouts?: DataFactoryDatasetDelimitedTextTimeouts;
}
export interface DataFactoryDatasetDelimitedTextAzureBlobFsLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#file_system DataFactoryDatasetDelimitedText#file_system}
  */
  readonly fileSystem: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#filename DataFactoryDatasetDelimitedText#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#path DataFactoryDatasetDelimitedText#path}
  */
  readonly path?: string;
}

function dataFactoryDatasetDelimitedTextAzureBlobFsLocationToTerraform(struct?: DataFactoryDatasetDelimitedTextAzureBlobFsLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DataFactoryDatasetDelimitedTextAzureBlobStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#container DataFactoryDatasetDelimitedText#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#filename DataFactoryDatasetDelimitedText#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#path DataFactoryDatasetDelimitedText#path}
  */
  readonly path: string;
}

function dataFactoryDatasetDelimitedTextAzureBlobStorageLocationToTerraform(struct?: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DataFactoryDatasetDelimitedTextHttpServerLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#filename DataFactoryDatasetDelimitedText#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#path DataFactoryDatasetDelimitedText#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#relative_url DataFactoryDatasetDelimitedText#relative_url}
  */
  readonly relativeUrl: string;
}

function dataFactoryDatasetDelimitedTextHttpServerLocationToTerraform(struct?: DataFactoryDatasetDelimitedTextHttpServerLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
    relative_url: cdktf.stringToTerraform(struct!.relativeUrl),
  }
}

export interface DataFactoryDatasetDelimitedTextSchemaColumn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#description DataFactoryDatasetDelimitedText#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#name DataFactoryDatasetDelimitedText#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#type DataFactoryDatasetDelimitedText#type}
  */
  readonly type?: string;
}

function dataFactoryDatasetDelimitedTextSchemaColumnToTerraform(struct?: DataFactoryDatasetDelimitedTextSchemaColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataFactoryDatasetDelimitedTextTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#create DataFactoryDatasetDelimitedText#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#delete DataFactoryDatasetDelimitedText#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#read DataFactoryDatasetDelimitedText#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html#update DataFactoryDatasetDelimitedText#update}
  */
  readonly update?: string;
}

function dataFactoryDatasetDelimitedTextTimeoutsToTerraform(struct?: DataFactoryDatasetDelimitedTextTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html azurerm_data_factory_dataset_delimited_text}
*/
export class DataFactoryDatasetDelimitedText extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html azurerm_data_factory_dataset_delimited_text} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryDatasetDelimitedTextConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryDatasetDelimitedTextConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_delimited_text',
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
    this._columnDelimiter = config.columnDelimiter;
    this._compressionCodec = config.compressionCodec;
    this._compressionLevel = config.compressionLevel;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._encoding = config.encoding;
    this._escapeCharacter = config.escapeCharacter;
    this._firstRowAsHeader = config.firstRowAsHeader;
    this._folder = config.folder;
    this._linkedServiceName = config.linkedServiceName;
    this._name = config.name;
    this._nullValue = config.nullValue;
    this._parameters = config.parameters;
    this._quoteCharacter = config.quoteCharacter;
    this._resourceGroupName = config.resourceGroupName;
    this._rowDelimiter = config.rowDelimiter;
    this._azureBlobFsLocation = config.azureBlobFsLocation;
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

  // column_delimiter - computed: false, optional: true, required: false
  private _columnDelimiter?: string;
  public get columnDelimiter() {
    return this.getStringAttribute('column_delimiter');
  }
  public set columnDelimiter(value: string ) {
    this._columnDelimiter = value;
  }
  public resetColumnDelimiter() {
    this._columnDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDelimiterInput() {
    return this._columnDelimiter
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

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string;
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string ) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding
  }

  // escape_character - computed: false, optional: true, required: false
  private _escapeCharacter?: string;
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }
  public set escapeCharacter(value: string ) {
    this._escapeCharacter = value;
  }
  public resetEscapeCharacter() {
    this._escapeCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharacterInput() {
    return this._escapeCharacter
  }

  // first_row_as_header - computed: false, optional: true, required: false
  private _firstRowAsHeader?: boolean;
  public get firstRowAsHeader() {
    return this.getBooleanAttribute('first_row_as_header');
  }
  public set firstRowAsHeader(value: boolean ) {
    this._firstRowAsHeader = value;
  }
  public resetFirstRowAsHeader() {
    this._firstRowAsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstRowAsHeaderInput() {
    return this._firstRowAsHeader
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

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string;
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string ) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue
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

  // quote_character - computed: false, optional: true, required: false
  private _quoteCharacter?: string;
  public get quoteCharacter() {
    return this.getStringAttribute('quote_character');
  }
  public set quoteCharacter(value: string ) {
    this._quoteCharacter = value;
  }
  public resetQuoteCharacter() {
    this._quoteCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharacterInput() {
    return this._quoteCharacter
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

  // row_delimiter - computed: false, optional: true, required: false
  private _rowDelimiter?: string;
  public get rowDelimiter() {
    return this.getStringAttribute('row_delimiter');
  }
  public set rowDelimiter(value: string ) {
    this._rowDelimiter = value;
  }
  public resetRowDelimiter() {
    this._rowDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowDelimiterInput() {
    return this._rowDelimiter
  }

  // azure_blob_fs_location - computed: false, optional: true, required: false
  private _azureBlobFsLocation?: DataFactoryDatasetDelimitedTextAzureBlobFsLocation[];
  public get azureBlobFsLocation() {
    return this.interpolationForAttribute('azure_blob_fs_location') as any;
  }
  public set azureBlobFsLocation(value: DataFactoryDatasetDelimitedTextAzureBlobFsLocation[] ) {
    this._azureBlobFsLocation = value;
  }
  public resetAzureBlobFsLocation() {
    this._azureBlobFsLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobFsLocationInput() {
    return this._azureBlobFsLocation
  }

  // azure_blob_storage_location - computed: false, optional: true, required: false
  private _azureBlobStorageLocation?: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation[];
  public get azureBlobStorageLocation() {
    return this.interpolationForAttribute('azure_blob_storage_location') as any;
  }
  public set azureBlobStorageLocation(value: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation[] ) {
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
  private _httpServerLocation?: DataFactoryDatasetDelimitedTextHttpServerLocation[];
  public get httpServerLocation() {
    return this.interpolationForAttribute('http_server_location') as any;
  }
  public set httpServerLocation(value: DataFactoryDatasetDelimitedTextHttpServerLocation[] ) {
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
  private _schemaColumn?: DataFactoryDatasetDelimitedTextSchemaColumn[];
  public get schemaColumn() {
    return this.interpolationForAttribute('schema_column') as any;
  }
  public set schemaColumn(value: DataFactoryDatasetDelimitedTextSchemaColumn[] ) {
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
  private _timeouts?: DataFactoryDatasetDelimitedTextTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryDatasetDelimitedTextTimeouts ) {
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
      column_delimiter: cdktf.stringToTerraform(this._columnDelimiter),
      compression_codec: cdktf.stringToTerraform(this._compressionCodec),
      compression_level: cdktf.stringToTerraform(this._compressionLevel),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      encoding: cdktf.stringToTerraform(this._encoding),
      escape_character: cdktf.stringToTerraform(this._escapeCharacter),
      first_row_as_header: cdktf.booleanToTerraform(this._firstRowAsHeader),
      folder: cdktf.stringToTerraform(this._folder),
      linked_service_name: cdktf.stringToTerraform(this._linkedServiceName),
      name: cdktf.stringToTerraform(this._name),
      null_value: cdktf.stringToTerraform(this._nullValue),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      quote_character: cdktf.stringToTerraform(this._quoteCharacter),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      row_delimiter: cdktf.stringToTerraform(this._rowDelimiter),
      azure_blob_fs_location: cdktf.listMapper(dataFactoryDatasetDelimitedTextAzureBlobFsLocationToTerraform)(this._azureBlobFsLocation),
      azure_blob_storage_location: cdktf.listMapper(dataFactoryDatasetDelimitedTextAzureBlobStorageLocationToTerraform)(this._azureBlobStorageLocation),
      http_server_location: cdktf.listMapper(dataFactoryDatasetDelimitedTextHttpServerLocationToTerraform)(this._httpServerLocation),
      schema_column: cdktf.listMapper(dataFactoryDatasetDelimitedTextSchemaColumnToTerraform)(this._schemaColumn),
      timeouts: dataFactoryDatasetDelimitedTextTimeoutsToTerraform(this._timeouts),
    };
  }
}
