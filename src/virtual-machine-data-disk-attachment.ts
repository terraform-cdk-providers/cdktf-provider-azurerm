// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineDataDiskAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#caching VirtualMachineDataDiskAttachment#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#create_option VirtualMachineDataDiskAttachment#create_option}
  */
  readonly createOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#lun VirtualMachineDataDiskAttachment#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#managed_disk_id VirtualMachineDataDiskAttachment#managed_disk_id}
  */
  readonly managedDiskId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#virtual_machine_id VirtualMachineDataDiskAttachment#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#write_accelerator_enabled VirtualMachineDataDiskAttachment#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#timeouts VirtualMachineDataDiskAttachment#timeouts}
  */
  readonly timeouts?: VirtualMachineDataDiskAttachmentTimeouts;
}
export interface VirtualMachineDataDiskAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#create VirtualMachineDataDiskAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#delete VirtualMachineDataDiskAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#read VirtualMachineDataDiskAttachment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html#update VirtualMachineDataDiskAttachment#update}
  */
  readonly update?: string;
}

function virtualMachineDataDiskAttachmentTimeoutsToTerraform(struct?: VirtualMachineDataDiskAttachmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html azurerm_virtual_machine_data_disk_attachment}
*/
export class VirtualMachineDataDiskAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html azurerm_virtual_machine_data_disk_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineDataDiskAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineDataDiskAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_data_disk_attachment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._caching = config.caching;
    this._createOption = config.createOption;
    this._lun = config.lun;
    this._managedDiskId = config.managedDiskId;
    this._virtualMachineId = config.virtualMachineId;
    this._writeAcceleratorEnabled = config.writeAcceleratorEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caching - computed: false, optional: false, required: true
  private _caching: string;
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching
  }

  // create_option - computed: false, optional: true, required: false
  private _createOption?: string;
  public get createOption() {
    return this.getStringAttribute('create_option');
  }
  public set createOption(value: string ) {
    this._createOption = value;
  }
  public resetCreateOption() {
    this._createOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionInput() {
    return this._createOption
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lun - computed: false, optional: false, required: true
  private _lun: number;
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun
  }

  // managed_disk_id - computed: false, optional: false, required: true
  private _managedDiskId: string;
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }
  public set managedDiskId(value: string) {
    this._managedDiskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskIdInput() {
    return this._managedDiskId
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId: string;
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId
  }

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean;
  public get writeAcceleratorEnabled() {
    return this.getBooleanAttribute('write_accelerator_enabled');
  }
  public set writeAcceleratorEnabled(value: boolean ) {
    this._writeAcceleratorEnabled = value;
  }
  public resetWriteAcceleratorEnabled() {
    this._writeAcceleratorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAcceleratorEnabledInput() {
    return this._writeAcceleratorEnabled
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineDataDiskAttachmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualMachineDataDiskAttachmentTimeouts ) {
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
      caching: cdktf.stringToTerraform(this._caching),
      create_option: cdktf.stringToTerraform(this._createOption),
      lun: cdktf.numberToTerraform(this._lun),
      managed_disk_id: cdktf.stringToTerraform(this._managedDiskId),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      write_accelerator_enabled: cdktf.booleanToTerraform(this._writeAcceleratorEnabled),
      timeouts: virtualMachineDataDiskAttachmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
